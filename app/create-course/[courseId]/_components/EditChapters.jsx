'use client'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from 'react-icons/hi2';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { CourseList } from "@/configs/schema";
function EditChapters({ course, index, refreshData }) {
  const Chapters=course?.courseOutput?.chapters;
  const [name,setName]=useState('');
  const [about,setAbout]=useState('');

  useEffect(()=>{
    setName(Chapters[index].chapter_name || " ");
    setAbout(Chapters[index].about || " ");
  },[course])
  const onUpdateHandler=async()=>{
    course.courseOutput.chapters[index].chapter_name=name;
    course.courseOutput.chapters[index].about=about;

    const result = await db
      .update(CourseList)
      .set({
        courseOutput: course?.courseOutput,
      })
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList.id });

      refreshData(true);

  }
  return (
    <Dialog>
  <DialogTrigger><HiPencilSquare/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Chapter</DialogTitle>
      <DialogDescription>
      <div className="mt-3 text-white">
              <label>Course Title</label>
              <Input
                defaultValue={Chapters[index].chapter_name}
                onChange={(event) => setName(event?.target?.value)}
              />
            </div>
            <div className="text-white">
              <label>Description</label>
              <Textarea
                className="h-40"
                defaultValue={Chapters[index].about}
                onChange={(event) => setAbout(event?.target?.value)}
              />
            </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
          <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default EditChapters