import React from 'react'
import Logo from '@/public/Logo'

const Header = () => {
  return (
    <nav className="w-full max-w-[1440px] mx-auto flex justify-between items-center px-6 py-5 z-50">
        <div className='flex justify-center items-center gap-x-5'>
            <Logo/>
            <p className='uppercase text-[#EDEDED]'>PenHub</p>
        </div>
        <ul className='flex gap-x-[50px] uppercase justify-center items-center text-[#EDEDED]'>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
    </nav>
  )
}

export default Header