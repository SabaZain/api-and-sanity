import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    desc: string;
    price: number;
    
}

const Card = ({img, title, desc, price}:propsType) => {
  return (
    <div className='mb-14 mx-1 text-center bg-[#F6F7FB]'>
      <Image 
      className="h-[100px] w-auto px-44 md:px-32 lg:px-24 py-1 md:py-2 lg:py-2"
      src={img} 
      width={500} 
      height={500} 
      alt={title}
      />
      <div className='p-3 m-3 bg-white'>
        <h2 className='text-[18px] text-main font-bold px-12'>{title}</h2>
        <div className='flex justify-center align items-center gap-1'>
        <Image src="/Image/green.svg" alt="green" width={10} height={10} /> 
        <Image src="/Image/pink.svg" alt="pink" width={10} height={10} /> 
        <Image src="/Image/blue.svg" alt="blue" width={10} height={10} /> 
        </div>
        <p className='text-secondary text-[14px] px-16'>{desc}</p>
        <p className='text-secondary text-[14px] px-20'>{price}</p>
      </div>
    </div>
    
  )
}

export default Card;
