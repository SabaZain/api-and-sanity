import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    price: number;
    
}

const Card3 = ({img, title, price}:propsType) => {
  return (
    <div>
      <Image 
      className="h-[100px] w-auto mx-44 md:mx-20 lg:mx-20 px-2 py-2 border border-secondary rounded-full shadow-lg"
      src={img} 
      width={700} 
      height={700} 
      alt={title}
      />
      <div className='p-3 m-3 px-24 md:px-0 lg:px-0 bg-white'>
        <h2 className='text-[14px] md:text-[18px] lg:text-[18px] text-secondary font-bold px-12'>{title}</h2>
        <p className='text-secondary text-[14px] px-20'>{price}</p>
      </div>
    </div>
    
  )
}

export default Card3;
