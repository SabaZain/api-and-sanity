import React, { SetStateAction } from 'react'
import { IoMailOutline } from "react-icons/io5";
import { TbPhoneRinging } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Dispatch} from 'react';
import { useAppSelector } from '@/redux/features/hooks';

interface TopbarProps{
    setShowCart: Dispatch<SetStateAction<boolean>>
}


const Topbar = ({setShowCart}: TopbarProps) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
    {/*Topbar*/}
  return ( 
    
    <div className='bg-primary md:flex lg:flex justify-around align items-center w-full p-2 px-7 md:px-40 lg:px-40'>
        <div className='flex gap-6'>
        <div className='flex justify-start align items-center gap-2'>
        <IoMailOutline className='text-[#F1F1F1]'/>
        <h2 className='text-[#F1F1F1]'>mhhasanul@gmail.com</h2>
        </div>
        <div className='flex items-center gap-2'>
        <TbPhoneRinging className='text-[#F1F1F1]'/>
        <span className='text-[#F1F1F1]'>(12345)67890</span>
        </div>
        </div>
        <div className='hidden md:flex lg:flex'>
            <ul className='flex gap-4'>
            <div className='flex items-center'>
            <li className='text-[#F1F1F1]'>English </li>
            <RiArrowDropDownLine size={30} className='text-[#F1F1F1]'/>
            </div>
            <div className='flex items-center'>
            <li className='text-[#F1F1F1]'>USD</li>
            <RiArrowDropDownLine size={30} className='text-[#F1F1F1]'/>
            </div>
            <div className='flex items-center gap-1'>
            <li className='text-[#F1F1F1]'>Login</li>
            <RiAccountBoxFill size={20} className='text-[#F1F1F1]'/>
            </div>
            <div className='flex items-center gap-1'>
            <li className='text-[#F1F1F1]'>Wishlist</li>
            <FaRegHeart size={15} className='text-[#F1F1F1]'/>
            </div>
            </ul>
        </div>
        <div className='relative cursor-pointer' onClick={() => setShowCart(true)}
        >
            <IoCartOutline size={30} />
            <div className='absolute top-[-4px] left-4 md:right-[-10px] lg:right-[-10px] bg-red-600 w-[16px] h-[16px] m-1
            rounded-full text-white text-[10px] grid place-items-center'>
            {cartCount}
            </div>
            </div>
            </div>
      
);
};

export default Topbar;
