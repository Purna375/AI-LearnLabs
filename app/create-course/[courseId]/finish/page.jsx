'use client'
import { db } from '@/configs/db';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { CourseList } from '@/configs/schema';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

function FinishScreen({params}) {
    const {user} = useUser();
    const [course, setCourse] = useState();
    const router=useRouter();
      useEffect(()=>{
  
        params&&GetCourse();
          },[params,user])
  
      const GetCourse=async()=>{
          const result= await db.select().from(CourseList)
          .where(and (eq(CourseList.courseId,params?.courseId),
          eq(CourseList?.createdBy,user?.primaryEmailAddress.emailAddress)))
          if (result && result.length > 0) {
            setCourse(result[0]);  // Safely access result[0]
            console.log(result);
          } else {
            console.warn('No course found or result is empty.');
            setCourse(null);  // Set a default value when no course is found
          }
          console.log(result);
      }
  
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
        <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats! Your Course is ready</h2>
        
        

        <CourseBasicInfo course={course} refreshData={()=>console.log()}/>
         <h2 className='text-white'>Course URL:</h2>
        <h2 className='text-center text-gray-300 border p-2 rounded-md flex gap-5 items-center'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
            <HiOutlineClipboardDocumentCheck className='h-5  w-5 cursor-pointer' onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+"/course/view/"+course?.courseId)}/>
        </h2>

    </div>
  )
}

export default FinishScreen