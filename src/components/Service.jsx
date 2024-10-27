import React from 'react'
import coldCoffe from '../../src/assets/coffe1.png'
import coldCoffe2 from '../../src/assets/coffe2.png'


const serviceData = [
    {
        id:1,
        image: coldCoffe,
        title: 'Black Coffee',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },
    {
        id:2,
        image: coldCoffe2,
        title: 'Black Coffee',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },
    {
        id:3,
        image: coldCoffe,
        title: 'Black Coffee',
        subtitle: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },
]
const Service = () => {
  return (
    <div className='w-full bg-[#1A1F25] aspect-[2.82] py-16'>
        <div className='container bg-[#1A1F25]'>
            <div className='flex items-center flex-col gap-5 uppercase'>
                <div  className='text-3xl flex gap-2 pb-4'>
                    <span className='text-[#F1DABF] font-font1'>Fresh</span>
                    <span>&</span>
                    <span className='text-primary font-font1'>Tasty coffee</span>  
                </div>
                <h3 className='font-font1 text-center text-sm text-[#F1DABF] leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum <br /> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.</h3>
            </div>
            <div className='grid grid-cols-3 pt-14'>
                {serviceData.map((service,index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-2'>
                        <img src={service.image} alt="" className="w-48 h-48 object-cover"/>
                        <h1 className='font-font1 text-primary text-2xl'>{service.title}</h1>
                        <p className='font-font1 text-sm text-[#F1DABF] opacity-70'>{service.subtitle}</p>
                    </div>
                 ))}
            </div>  
        </div>
    </div>
  )
}

export default Service