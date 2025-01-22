import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";

const DiscountItems = () => {
  return (
    <div className='ml-16 mt-8'>
    <h1 className='text-secondary text-center text-2xl font-bold'>Discount Item</h1>
    <ul className='flex justify-center items-center gap-4 mt-4'>
        <li className='text-main text-center'>Wood Chair</li>
        <li className='text-secondary text-center'>Plastic Chair</li>
        <li className='text-secondary text-center'>Sofa Colletion</li>
        
    </ul>
    
    <div className='flex flex-col md:flex-row lg:flex-row justify-center align items-center mt-4 p-4'>
        <div>
            <h1 className='text-secondary text-2xl'>20% Discount Of All Products</h1>
            <h2 className='text-main'>Eams Sofa Compact</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget 
            <br />feugiat habitasse nec, bibendum condimentum.</p>
            <div className='flex md:gap-8 lg:gap-8 mt-2'>
            <TiTick /> <p> Material expose like metals</p>
            <TiTick />   <p> Clear lines and geomatric figures</p>
            </div>
            <div className='flex gap-3 md:gap-11 lg:gap-11'>
            <TiTick />  <p>Simple neutral colours.</p>
            <TiTick />   <p>Material expose like metals</p>
            </div>
            <div className='md:mr-32 lg:mr-32 md:text-center mt-4 lg:text-center'>
            <button className='bg-main text-white font-semibold border-sm p-1 mt-4 ml-24 md:ml-36 lg:ml-36 rounded-sm'>Shop Now</button>
            </div>
        </div>
      <div>
        <Image src="/Image/dp.svg" alt="discount product" width={400} height={400} /> 
        </div>
    </div>
    </div>
  )
}

export default DiscountItems;
