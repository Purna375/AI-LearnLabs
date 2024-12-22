import Image from 'next/image'
import React from 'react'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { HiMiniEllipsisVertical } from 'react-icons/hi2'
import DropdownOption from './DropdownOption'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/configs/db'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function CourseCard({course, refreshData, displayUser=false}) {
    const handleOnDelete = async () => {
        const resp = await db.delete(CourseList).where(eq(CourseList.id, course?.id))
        .returning({id:CourseList?.id})

        if(resp){
            refreshData(true);
        }
    }

  return (
    <div className='w-[300px] h-[400px] mt-12 shadow-md rounded-lg border p-2
    hover:scale-105 hover:shadow-xl hover:border-primary transition-all cursor-pointer'>
        <Link href={'/course/'+course?.courseId}>
            <Image 
                src={course?.courseBanner} 
                width={300} 
                height={180}
                className='w-full h-[180px] object-cover rounded-lg'
            />
        </Link>
        <div className=''>
            {/* Ensure the title is clamped to one or two lines */}
            <h2 className='text-xl text-white font-medium flex justify-between items-center mt-3 h-[50px] line-clamp-2'>
                {course?.courseOutput?.course_name}
                {!displayUser && (
                    <DropdownOption handleOnDelete={() => handleOnDelete()}>
                        <HiMiniEllipsisVertical className='text-xl'/>
                    </DropdownOption>
                )}
            </h2>
            
            {/* Course category */}
            <p className='text-sm text-gray-500 my-1 h-[40px] line-clamp-2'>
                {course?.category}
            </p>

            {/* Chapters and Level */}
            <div className='flex items-center justify-between'>
                <h2 className='flex gap-2 items-center p-1 text-primary text-sm mt-3'>
                    <HiOutlineBookOpen />{course?.courseOutput?.number_of_chapters} Chapters
                </h2>
                <h2 className='text-sm text-primary mt-3'>
                    {course?.level}
                </h2>
            </div>

            {/* User profile display */}
            {displayUser && (
                <div className='flex gap-3 items-center mt-2'>
                    <Image 
                        src={course?.userProfileImage} 
                        width={30} 
                        height={30} 
                        className='rounded-full'
                    />
                    <h2 className='text-sm text-gray-400'>
                        {course?.userName}
                    </h2>
                </div>
            )}
        </div>
    </div>
  )
}

export default CourseCard;
