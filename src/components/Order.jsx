import React from 'react'
import map from '../../src/assets/world-map.png'

const Order = () => {
  return (
    <div className='w-full bg-[#1A1F25] aspect-[2.82] pt-20'>
        <div className='container flex justify-evenly items-center'>
            <div className=' w-384px h-300px flex mb-4 flex-col gap-8'>
                <h1 className='text-primary text-4xl'>Buy our products <br /> from anywhere</h1>
                <div className='flex gap-2'>
                    <input type="text" className='px-3 w-44 h-12 py-2 bg-transparent rounded-lg border' placeholder='Name'/>
                    <input type="text" className='px-5 w-56 h-12 py-2 bg-transparent rounded-lg border' placeholder='Email'/>
                </div>
                <div className='flex gap-2'>
                    <input type="text" className='px-3 w-56 h-12 py-2 bg-transparent rounded-lg border' placeholder='Country'/>
                    <input type="text" className='px-5 w-44 h-12 py-2 bg-transparent rounded-lg border' placeholder='Zip Code'/>
                </div>
                    <button className='bg-primary rounded-md w-[400px] h-12 text-white'>Order Now</button> 
            </div>
            <img src={map} alt="world-map" className='bg-cover'/>
        </div>
    </div>
  )
}

export default Order