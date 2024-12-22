import { UserInputContext } from '@/app/_context/UserInputContext';
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React from 'react'
import { useContext } from 'react';

function SelectCategory() {
  const {userCourseInput, setUserCourseInput} = useContext(UserInputContext);

  const handleCategoryChange=(category)=>{
    setUserCourseInput(prev=>({
      ...prev,
      category:category
    }))
  }
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 text-white">Select the Course Category</h2>
    <div className="grid grid-cols-3 gap-10 ">
        
        {CategoryList.map((item,index)=>(
            <div className={`flex flex-col p-5 border items-center rounded-xl text-white hover:border-primary hover:bg-purple-300
            cursor-pointer ${userCourseInput?.category== item.name&&'border-primary text-black bg-purple-300 '}`}
            onClick={()=> handleCategoryChange(item.name)}>
                <Image src={item.icon} width={70} height={70}/>
                <h2 className="font-semibold text-white">{item.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SelectCategory