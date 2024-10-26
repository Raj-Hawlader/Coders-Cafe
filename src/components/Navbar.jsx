
import React from 'react'
import { SlMenu } from "react-icons/sl";
import {motion} from "framer-motion"

const Navbar = ({sidebar, setsidebar}) => {
  return (
    <nav className='absolute top-0 w-full left-0 pt-10 z-40 text-white'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <motion.h1 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.6
                 }}
                className='text-2xl font-semibold uppercase flex gap-3'>
                    <span className='text-[#F1DABF]'>Byte</span>
                    <span>&</span>
                    <span className='text-primary'>Brew</span>
                </motion.h1>
                <motion.button
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.6
                }}
                onClick={()=>setsidebar(!sidebar)}
                >
                    <SlMenu className='text-3xl cursor-pointer'/>
                </motion.button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar