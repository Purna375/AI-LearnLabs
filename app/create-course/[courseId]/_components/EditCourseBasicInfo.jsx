'use client';
import React, { useState, useEffect } from 'react';
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
import { Button } from '@/components/ui/button';
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { CourseList } from '@/configs/schema';

function EditCourseBasicInfo({ course, refreshData }) {
  const [course_name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (course?.courseOutput) {
      setName(course?.courseOutput?.course_name || '');
      setDescription(course?.courseOutput?.description || '');
    }
  }, [course]);

  const onUpdateHandler = async () => {
    if (!course?.courseOutput) return;

    const updatedCourseOutput = {
      ...course.courseOutput,
      course_name: course_name,
      description: description,
    };

    const result = await db
      .update(CourseList)
      .set({
        courseOutput: updatedCourseOutput,
      })
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList.id });

      refreshData(true);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
          <DialogDescription>
            <div className="mt-3">
              <label>Course Title</label>
              <Input
                value={course_name}
                onChange={(event) => setName(event?.target?.value)}
              />
            </div>
            <div>
              <label>Description</label>
              <Textarea
                className="h-40"
                value={description}
                onChange={(event) => setDescription(event?.target?.value)}
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
  );
}

export default EditCourseBasicInfo;
