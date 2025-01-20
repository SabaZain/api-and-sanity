"use client"
import React, { useEffect, useState } from 'react';
import productData from "@/utils/productData";
import ProductCard, { IProduct} from './productCard';


const tabsData: string[] = ["ALL"];

const NewArrival = () => {

const [selectedTab, setSelectedTab] = useState<number>(0);
const [data, setData] = useState<IProduct[]>([]);

const shuffleArray = (array: IProduct[]): IProduct[] => {
  

  return array
    .map((value) => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort )
    .map(({value}) => value);
};

useEffect(() => {
  setData(shuffleArray(productData).slice(0, 4));
}, []);


const handleTab = (index: number) => {
    const category = tabsData[index].toUpperCase()
    setSelectedTab(index);

    if(category === "ALL"){
      setData(shuffleArray(productData).slice(0, 10)); 
      return;
    }

    const filterData = productData.filter((item) => item.category.includes(category));
    setData(shuffleArray(filterData));
};

 return (
    <div className='bg-[#EEEFFB] pt-20'>
      <div className='text-center'>
      <h1 className='font-bold text-3xl'>New Arrival</h1>
      <h2 className="text-blue-800 text-[30px] font-semibold font-serif">For you For your comfort</h2>

      <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase
      font-medium text-[20px]'>
        {tabsData.map((text, index) => (
        <li 
        key={text} 
        className={`${
        selectedTab === index ? "text-accent" : "" 
        } cursor-pointer hover:text-accent`}
        
        onClick={() => handleTab(index)}
        >
        {text}
      </li>
    ))}
      </ul>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8 m-2'>
        {data.map((item: IProduct) => (
        <ProductCard 
        key={item.id} 
        id={item.id} 
        img={item.img} 
        name={item.name}
        price={item.price}
        category={item.category}
        
        />
        ))}
      </div>
    </div>
  </div>
  )
}

export default NewArrival;
