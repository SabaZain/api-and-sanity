import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row lg:flex-row gap-12 px-20 bg-[#EEEFFB] mt-8 p-2'>
        <div>
        <h1 className='text-xl font-bold'>Hekto</h1>
        <input 
        type="text"
        placeholder='Enter Email Address'
        className='border border-slate-400 mt-6'
        />
        <button className='text-white font-bold bg-main px-2'>Sign Up</button>
        <h2 className='mt-6'>Contact Info</h2>
        <p className='text-sm'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        
        <div>
            <h1 className='text-xl font-bold'>Catagories</h1>
            <ul>
                <li className='p-1'>Laptops & Computers</li>
                <li className='p-1'>Cameras & Photography</li>
                <li className='p-1'>Smart Phones & Tablets</li>
                <li className='p-1'>Video Games & Consoles</li>
                <li className='p-1'>Waterproof Headphones</li>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-bold'>Customer Care</h1>
            <ul>
                <li className='p-1'>My Account</li>
                <li className='p-1'>Discount</li>
                <li className='p-1'>Returns</li>
                <li className='p-1'>Orders History</li>
                <li className='p-1'>Order Tracking</li>
            </ul>
        </div>

        <div>
            <h1 className='text-xl font-bold'>Pages</h1>
            <ul>
                <li className='p-1'>Blog</li>
                <li className='p-1'>Browse the Shop</li>
                <li className='p-1'>Pre-Built Pages</li>
                <li className='p-1'>Visual Composer Elements</li>
                <li className='p-1'>WooCommerce Pages</li>
            </ul>
        </div>
      
    </div>
    <div className='flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between px-48 bg-[#E7E4F8]'>
    <p className='text-start md:text-center lg:text-center text-[12px] md:text-[16px] lg:text-[16px] font-bold'>©Webecy-All Rights Reserved</p>
    <div className='flex justify-center align items-center gap-2'>
    <FaFacebook />
    <AiFillInstagram />
    <AiFillTwitterCircle />
    </div>
  </div>
  </div>
  )
}

export default Footer;
