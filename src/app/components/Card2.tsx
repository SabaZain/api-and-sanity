import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    desc: string;
    link: string;
    
}

const Card2 = ({img, title, desc, link}:propsType) => {
  return (
    <div className='border rounded-md shadow-md mx-8 py-2'>
    <div>
      <Image 
      className=" w-full px-14 py-1"
      src={img} 
      width={400} 
      height={400} 
      alt={title}
      />
      </div>
      <div>
      <div className='p-1 m-3 bg-white'>
        <h2 className='text-[18px] text-secondary font-bold px-14 p-1'>{title}</h2>
        <div>
        <p className='text-[#72718F] text-sm px-14 p-1'>{desc}</p>
        <p className='text-main text-[14px] px-14 p-1'>{link}</p>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Card2;
