import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-6 shadow-sm shadow-white'>
        <Image src={"/icon.png"} width={70} height={70}/>
        <UserButton />
    </div>
  )
}

export default Header