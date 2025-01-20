import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    desc: string;
    price: number;
    
}

const Card1 = ({img, title, desc, price}:propsType) => {
  return (
    <div className='py-4 px-16 md:px-4 lg:px-6 mx-4 md:mx-6 lg:mx-6 text-center bg-[#F6F7FB]'>
      <Image 
      className="h-[100px] w-auto px-24 py-1"
      src={img} 
      width={1000} 
      height={1000} 
      alt={title}
      />
      <div className='flex'>
      <div className='flex justify-between align items-center gap-16 px-4 m-3 bg-white'>
        <h2 className='text-[18px] text-secondary font-bold'>{title}</h2>
        <div className='flex gap-1'>
        <p className='text-secondary text-[14px]'>{desc}</p>
        <p className='text-main text-[14px] line-through'>{price}</p>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Card1;
