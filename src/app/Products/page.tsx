"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';


interface Product {
  name: string;
  slug: string;
  category: string,
  description: string;
  price: string;
  discountPercentage: number,
  imageUrl: string;
}


const ProductsPage: React.FC = () => {

const [data, setData] = useState<Product[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const fetchedData = await client.fetch(
      `*[_type == "product"] {
      name,
      category,
      price,
      discountPercentage,
      description,
      "slug":slug.current,
      "imageUrl": image.asset->url
    }`
  );
    setData(fetchedData);
};

  fetchData();
}, []);

if(data.length === 0) return <div className='font-bold'>Loading products...</div>;



  return (
    <div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-6 p-6 mx-6'>
        <h1 className='text-3xl text-center md:text-center lg:text-center md:text-4xl lg:text-4xl font-semibold mt-20'>Products List</h1>
      </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3'>
      {data.map((product, index) => (
      <div key={index} className='max-w-sm mx-auto border border-black rounded-lg shadow-inner overflow-hidden m-2 hover:bg-lime-700'>
        <Image 
      src={product.imageUrl} 
      alt={`Image for ${product.name}`}
      height={200} 
      width={200} 
      className='object-right-bottom ml-20 h-48'
      />
      <div className='p-2'>
        <h2 className='text-[18px] text-center font-bold'>{product.name}</h2>
        <h2 className='text-[18px] text-center font-bold'>Category: {product.category}</h2>
        <p className='text-md text-center line-clamp-3'>{product.description}</p>
        <h3 className='text-xl text-center font-bold'>Price: ${product.price}</h3>
        <h4 className='text-xl text-center font-bold'>Discount Percentage:{product.discountPercentage}%</h4>
        <Link href={`/product/${product.slug}`} passHref>
        <h3 className='text-center text-blue-900 hover:text-red-800 bg-black hover:bg-white rounded-md p-1 mt-2 cursor-pointer'>Read More</h3>
        </Link>
        </div>
        </div>
      ))}
      </div>
      </div>
  );
};

export default ProductsPage;

