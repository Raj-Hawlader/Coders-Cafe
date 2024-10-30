import React from 'react'
import bgcoffe from '../../src/assets/coffee-cover.jpg'
import store from '../../src/assets/play_store-DbkwCeg2.png'
import {motion} from "framer-motion"

const BG = {
    backgroundImage: `url(${bgcoffe})`,
    backgroundSize: 'cover',
}  

const Playstore = () => {
  return (
  <div className='bg-[#1A1F25] pt-8'>
     <div className='container bg-[#1A1F25]'>
     <div className='relative w-full aspect-[3]  rounded-lg' style={BG}>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.8
         }}
         className='absolute right-8 top-36 flex flex-col gap-3 justify-center items-center text-center'>
            <h1 className='text-2xl font-font1'>Download the app</h1>
            <p className='font-font1 opacity-65'>Lorem ipsum dolor sit amet consedolor sit amet <br />  consectetur adipisicing elit. Officiis</p>
            <img src={store} alt="/" className='w-44 '/>
        </motion.div>
    </div>
   </div>
  </div>
  )
}

export default Playstore