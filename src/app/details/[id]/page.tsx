"use client"
import React, { useEffect, useState } from 'react';
import  {useParams}  from 'next/navigation';
import Data from '@/utils/productData';
import Link from "next/link"
import Image from "next/image"
import { FaRegStar } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


interface IProduct {
    id: number;
    img: string;
    name: string;
    desc: string;
    price: number;
    category: string[];
}



const DetailPage = () => {

    const params = useParams();
    const[productData, setProductData] = useState<IProduct | null>(null);
       
   useEffect(() => {
        const id = params.id;
        const getProductData = Data.find((item) => item.id.toString() === id);

        if(getProductData){
          setProductData(getProductData);
        } else {
        setProductData(null);
        }
    }, [params.id]);

    if(productData === null){
      return <div className='font-bold'>Loading...</div>
    }
  
    return (
    <div>
      <div className='bg-gray-100 py-4'>
        <div className='container flex gap-4 pl-12 items-center text-gray-500'>
            <Link href="/" className="cursor-pointer hover:text-accent">
            Home
            </Link>

            <div className='w-[30px] h-[2px] bg-gray-400'/>
            <p>{productData?.category[0]}</p>
            <div className='w-[30px] h-[2px] bg-gray-400'/>
            <p>{productData?.name}</p>
          </div>
        </div>

       <div className='container pl-3 p-1'>
        <div className='grid md:grid-cols-2 gap-16'>
           <div>
             <Image 
             className = "w-full h-full" 
             src={productData?.img} 
             width={1000} 
             height={1200} 
             alt={productData?.name} 
             />
            </div> 
            <div className='space-y-2'>
              <div className='flex items-center text-accent'>
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <FaRegStar />
              <p className='text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer'>
                (8 customer review)
              </p>
            </div>
            <div className='text-black space-y-1'>
            <h2 className='text-3xl font-semibold'>{productData?.name}</h2>
            <p className='px-2'>{productData?.desc}</p>
            <p className='text-xl'>${productData?.price}.00</p>
            <p className='text-orange-600 text-[14px]'>Available in different colors</p>
            <p className='text-gray-500 text-[14px]'>25 in stock</p>
            
            <div className='flex gap-4 items-center py-1 text-[14px]'>
            <div className='flex gap-1 items-center'>
            <IoIosHeart />
            Add to wish list
            </div>
          </div>
           <div className='w-[30px] h-[2px] bg-gray-400'/>
           <div>Name: {productData?.name}</div>
           <div className='capitalize'>
            Category: {productData?.category[0]}
           </div>
           <div className='flex gap-1 items-center'>
            Tags: {" "}
            {productData?.category.map((item: string) => (
              <div key={item}>{item}</div>
            ))}
           </div>
           <div className='w-[30px] h-[2px] bg-gray-400'/>
           <div className='flex gap-1 items-center pt-4'>
           SHARE: {" "}
           <div className='flex gap-2 items-center text-[18px]'>
           <FaFacebookSquare /> <FaTwitter /> <FaSquareInstagram />
           </div>
           </div>
            </div>
          </div>
        </div>
       </div>

    </div>
 );
};

export default DetailPage;
