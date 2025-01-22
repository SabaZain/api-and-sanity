"use client"
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';


const Navbar = () => {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(prev => !prev);
    };

  
    {/*Navbar*/}
  return (
    
    <div className='flex justify-between align items-center w-full p-2 px-40'>
        
        <div className='flex justify-between items-center gap-2 md:gap-10 lg:gap-10 '>
      <div className='md:flex lg:flex md:gap-12 lg:gap-12'>
        <h1 className='text-[34px] font-bold text-secondary ml-[-10px]'>Hekto</h1>
        </div>
        <div className='md:hidden lg:hidden cursor-pointer mr-4' onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile menu">
        <IoMenu size={30} />
        </div>
        <ul className='hidden md:flex lg:flex items-center gap-2 md:gap-6 lg:gap-6'>
           <div className='flex items-center'> 
           <li className='text-[16px] font-normal text-main'><Link href="/">Home</Link></li>
           <RiArrowDropDownLine size={30} className='text-main'/>
           </div>
            <li className='text-[16px] font-normal text-secondary'><Link href="/Products">Products</Link></li>
            <li className='text-[16px] font-normal text-secondary'><Link href="/Blog">Blog </Link></li>
            <li className='text-[16px] font-normal text-secondary'><Link href="/Shop">Shop</Link></li>
            <li className='text-[16px] font-normal text-secondary'><Link href="/Contact">Contact</Link></li>
        </ul>
        </div>
        {isOpen && (
            
            <div id="mobile-menu" className='md:hidden lg:hidden bg-orange-400 p-1 pl-0.5 -ml-3 rounded-md'>
            <ul className='flex-col gap-2'>
            <li className='menuLink hover:text-blue-900'><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
             <li className='menuLink hover:text-blue-900'><Link href="/Products" onClick={() => setIsOpen(false)}>Products</Link></li>
              <li className='menuLink hover:text-blue-900'><Link href="/Blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li className='menuLink hover:text-blue-900'><Link href="/Shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
              <li className='menuLink hover:text-blue-900'><Link href="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
          
        )}

    <div className='hidden md:flex lg:flex'>
     <input 
     type="text"
     placeholder=''
     className='border border-slate-400'
     />
     <IoIosSearch size={30} className='bg-main text-[#F1F1F1]' />
   </div>
     </div>
  )
}
    
      
export default Navbar;
