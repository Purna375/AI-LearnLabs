'use client'
import React, { useState } from 'react'
import { HiOutlineClock } from 'react-icons/hi2'

function ChapterListCard({chapter,index}) {
  const [selectedChapter,setSelectedChapter]=useState();
  return (
    <div className='grid grid-cols-5 p-3 items-center border-b'>
        <div>
            <h2 className='p-1 bg-primary w-8 h-8 text-white rounded-full text-center'>{index+1}</h2>
        </div>
        <div className='col-span-4'>
            <h2 className={`font-medium text-white
               ${selectedChapter?.chapter_name==chapter?.chapter_name && 'text-black'}
            `}>{chapter?.chapter_name}</h2>
            <h2 className='flex items-center gap-2 text-sm text-primary'><HiOutlineClock/>{chapter?.duration}</h2>
        </div>
    </div>
  )
}

export default ChapterListCard