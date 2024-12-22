"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import { useContext } from 'react';

function AddCourse() {
    const {user} = useUser();
    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext);

    return (
    <div className='flex justify-between items-center'>
        <div>
            <h2 className='text-3xl text-white'>Hello, <span className='font-bold text-primary'>{user?.fullName}</span></h2>
            <p className='text-sm text-gray-500'>Create new course with AI, Share with friends and Learn from it.</p>
        </div>
        <Link href={userCourseList>=5?'/dashboard/upgrade':'/create-course'}>
        <Button>+ Create AI Course</Button>
        </Link>
    </div>
  )
}

export default AddCourse