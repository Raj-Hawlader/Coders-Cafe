import React from 'react'
import map from '../../src/assets/world-map.png'
import {motion} from "framer-motion"

const Order = () => {
  return (
    <div className='w-full bg-[#1A1F25] aspect-[2.82] pt-20'>
        <div className='container flex justify-evenly items-center'>
            <div className=' w-384px h-300px flex mb-4 flex-col gap-8'>
                <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.8
                 }}
                  className='text-primary text-4xl'>Buy our products <br /> from anywhere</motion.h1>
                <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:.9
                 }}
                 className='flex gap-2'>
                    <input type="text" className='px-3 w-44 h-12 py-2 bg-transparent rounded-lg border' placeholder='Name'/>
                    <input type="text" className='px-5 w-56 h-12 py-2 bg-transparent rounded-lg border' placeholder='Email'/>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:1
                 }}
                 className='flex gap-2'>
                    <input type="text" className='px-3 w-56 h-12 py-2 bg-transparent rounded-lg border' placeholder='Country'/>
                    <input type="text" className='px-5 w-44 h-12 py-2 bg-transparent rounded-lg border' placeholder='Zip Code'/>
                </motion.div>
                    <motion.button 
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1.1
                     }}
                     className='bg-primary rounded-md w-[400px] h-12 text-white'>Order Now</motion.button> 
            </div>
            <img src={map} alt="world-map" className='bg-cover'/>
        </div>
    </div>
  )
}

export default Order