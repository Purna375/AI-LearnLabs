import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="flex justify-between p-3 shadow-md bg-black items-center">
        <Image src={'/logo.png'} width={300} height={300} className='mt-0'/>
        <a href='/dashboard'><Button className='mr-6 px-8 py-5 hover:bg-purple-700'>Get Started</Button></a>
    </div>
  )
}

export default Header