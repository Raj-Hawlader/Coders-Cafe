import React from 'react'
import { SlMenu } from "react-icons/sl";


const Navbar = () => {
  return (
    <nav className='absolute top-0 w-full left-0 pt-10 z-20 text-white'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold uppercase'>
                    <span className='text-[#F1DABF]'>Coders</span>
                    <span className='text-primary'>Cafe</span>
                </h1>
                <div>
                    <SlMenu className='text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar