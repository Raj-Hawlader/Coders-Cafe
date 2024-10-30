import React from 'react'
import bgcoffe from '../../src/assets/coffee-cover.jpg'
import store from '../../src/assets/play_store-DbkwCeg2.png'

const BG = {
    backgroundImage: `url(${bgcoffe})`,
    backgroundSize: 'cover',
}  

const Playstore = () => {
  return (
    <div className='relative w-full aspect-[3] bg-[#1A1F25]' style={BG}>
        <div className='absolute right-8 top-36 flex flex-col gap-3 justify-center items-center text-center'>
            <h1 className='text-2xl font-font1'>Download the app</h1>
            <p className='font-font1 opacity-65'>Lorem ipsum dolor sit amet consedolor sit amet <br />  consectetur adipisicing elit. Officiis</p>
            <img src={store} alt="/" className='w-44 '/>
        </div>
    </div>
  )
}

export default Playstore