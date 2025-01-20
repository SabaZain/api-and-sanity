import React from 'react'
import Image from 'next/image';


const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-start w-full px-2'>
    <div className='mt-6'>
      <Image src="/Image/heroimage1.svg" alt="hero image 1" width={450} height={450} />
      </div>

      <div className='px-14 mt-8 md:mt-28 lg:mt-28'>
          <h3 className='text-main'>Best Furniture For Your Castle....</h3>
          <h1 className='text-[#000000] text-[30px] font-bold'>New Furniture Collection</h1>
          <h1 className='text-[#000000] text-[30px] font-bold'>Trends in 2020</h1>
          <p className='font-extralight mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Magna in est adipiscing
          in phasellus non in justo.</p>
          <button className='bg-main text-[#F1F1F1] text-[17px] mt-4 p-2 rounded-md'>Shop Now</button>
      </div>
      
      <div className='mt-12'>
      <Image src="/Image/heroimage2.svg" alt="hero image 1" width={700} height={700} />
      </div>
    </div>
  )
}

export default Hero;
