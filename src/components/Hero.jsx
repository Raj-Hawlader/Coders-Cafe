import React from 'react'
import Bgimage from '../../src/assets/bg-slate.png'
import blackCoffee from '../../src/assets/black.png'

const bgimage = {
    backgroundImage: `url(${Bgimage})`,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
};

const Hero = () => {

  return (
    <main style={bgimage}>
        <section className=' min-h-[750px] w-full'>
            <div className='container'>
                
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                    <div className='text-[#F1DABF] mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='text-7xl font-bold leading-tight ml-14'>Coders Cafe</h1>
                        <div className='relative'> 
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Blvck Tumbler</h1>  
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus!</h1>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={blackCoffee} alt="Coffee-img" className='relative z-40 h-[400px] md:h-[700px] img-shadow'/>
                        <div className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px]  rounded-full z-10'></div>
                        <div className='absolute -top-20 left-[200px] z-[1]'>
                            <h1 className='text-[170px] scale-150 font-bold text-[#1A1F25]/50 leading-none'>Blvck Lovers</h1>
                        </div>
                    </div>
                    <div className='text-[#F1DABF] mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Coders Cafe</h1>
                        <div className='relative'> 
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Blvck Lovers</h1>  
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos deserunt quis </h1>
                            </div>
                            <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-gray-900/40'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </main>
  )
}

export default Hero