import React from 'react'
import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <div className='mt-8'>
     <div>
      <h1 className='text-xl md:text-2xl lg:text-2xl text-secondary text-center font-semibold'>Trending Products</h1>
    </div>
    <div className=' flex flex-col md:flex-row lg:flex-row gap-11 px-40 md:px-12 lg:px-64'>
      <div>
      <Image src="/Image/TP1.svg" alt="Trending product" width={150} height={150} className='bg-[#F6F7FB] mt-8' />
      <h1 className='text-secondary'>Cantilever chair</h1> 
      <div className='flex'>
      <h2 className='text-secondary'>$26.00 </h2>
      <h3 className='text-gray-400'>$42.00</h3>
      </div>
    </div>

    <div>
      <Image src="/Image/TP2.svg" alt="Trending product" width={150} height={150} className='bg-[#F6F7FB] mt-8' />
      <h1 className='text-secondary'>Cantilever chair</h1> 
      <div className='flex'>
      <h2 className='text-secondary'>$26.00 </h2>
      <h3 className='text-gray-400'>$42.00</h3>
      </div>
    </div>

    <div>
      <Image src="/Image/TP3.svg" alt="Trending product" width={150} height={150} className='bg-[#F6F7FB] mt-8' />
      <h1 className='text-secondary'>Cantilever chair</h1> 
      <div className='flex'>
      <h2 className='text-secondary'>$26.00 </h2>
      <h3 className='text-gray-400'>$42.00</h3>
      </div>
    </div>

    <div>
      <Image src="/Image/TP4.svg" alt="Trending product" width={150} height={150} className='bg-[#F6F7FB] mt-8' />
      <h1 className='text-secondary'>Cantilever chair</h1> 
      <div className='flex'>
      <h2 className='text-secondary'>$26.00 </h2>
      <h3 className='text-gray-400'>$42.00</h3>
      </div>
    </div>
    </div>
    <div className='grid md:flex lg:flex px-20 md:px-6 lg:px-60'>
    <Image src="/Image/Group1.svg" alt="Group 1" width={300} height={300}/> 
    <Image src="/Image/Group2.svg" alt="Group 1" width={300} height={300} />   
    <div className='flex-col mt-5 px-8'>
    <Image src="/Image/L1.svg" alt="List 1" width={200} height={200} className='pt-1'/> 
    <Image src="/Image/L2.svg" alt="List 2" width={200} height={200} className='pt-1'/> 
    <Image src="/Image/L3.svg" alt="List 3" width={200} height={200} className='pt-1'/>    
    </div>
    </div>
    
    </div>
  )
}

export default TrendingProducts;
