import React from 'react'
import Image from 'next/image';

const UniqueFeatures = () => {
  return (
    <div className='flex justify-center align items-center mt-8 p-2 bg-[#EEEFFB]'>
        <div>
        <Image src="/Image/uniquesofa.svg" alt="unique sofa" width={300} height={300} /> 
        </div>

        <div>
            <h1 className='text-xl md:text-2xl lg:text-2xl text-secondary font-semibold'>Unique Features Of leatest &</h1>
            <h1 className='text-xl md:text-2xl lg:text-2xl text-secondary font-semibold'>Trending Poducts</h1>
            <li className='text-main'>All frames constructed with hardwood solids and laminates</li>
            <li className='text-secondary'>Reinforced with double wood dowels, glue, screw - nails corner<br/> 
            blocks and machine nails</li>
            <li className='text-green-700'>Arms, backs and seats are structurally reinforced</li>
            <div className='flex items-center gap-3'>
                <button className='bg-main text-[#F1F1F1] text-[17px] mt-4 p-2 rounded-md'>Add To Cart</button>
                <div className='pt-3'>
                <button className='text-secondary'>B&B Italian Sofa</button>
                <button className='text-secondary'>$32.00</button>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default UniqueFeatures;
