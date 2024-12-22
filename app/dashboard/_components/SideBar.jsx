"use client"
import { Progress } from '@/components/ui/progress';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { useContext } from 'react';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

function SideBar() {
    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext);
    const Menu=[
        {
            id:1,
            name:'Home',
            icon: <HiOutlineHome />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon: <HiOutlineSquare3Stack3D />,
            path:'/dashboard/explore'
        },
        {
            id:1,
            name:'Upgrade',
            icon: <HiOutlineShieldCheck />,
            path:'/dashboard/upgrade'
        },
    ]
    const path =usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md shadow-gray-200">
        <Image src={'/logo.png'} width={400} height={350}/>
        <hr className='my-5'/>
        <ul>
            {Menu.map((item,index)=>(
                <Link href={item.path}>
                <div className={`flex item-center gap-2 text-gray-600 p-3
                cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path == path&&'bg-gray-100 text-black'}`}>
                    <div className="text-3xl">
                       {item.icon} 
                    </div>
                    <div>{item.name}</div>
                </div>
                </Link>
            ))}
        </ul>
        <div className="absolute bottom-20 w-[80%]">
          <Progress value={(userCourseList?.length/5)*100} />
          <h2 className='text-sm my-2 text-gray-100'>{userCourseList?.length} Out of 5 Course created</h2>
          <h2 className='text-xs text-gray-400'>Upgrade your plan for unlimted course generation</h2>
        </div>
    </div>
  )
}

export default SideBar