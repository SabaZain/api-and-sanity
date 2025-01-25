import React from 'react'
import Card3 from './Card3';

const data = [
    {
        img: "/Image/tc4.svg",
        title: "Mini LCW Chair",
        price: "56.00"
    },
    {
        img: "/Image/tc2.svg",
        title: "Mini LCW Chair",
        price: "56.00"
    },
    {
        img: "/Image/tc3.svg",
        title: "Mini LCW Chair",
        price: "56.00"
    },
    {
        img: "/Image/tc4.svg",
        title: "Mini LCW Chair",
        price: "56.00"
    },
];

const TopCategories = () => {
  return (
    <div className='mt-8 mb-8'>
    <div>
          <h1 className='text-2xl text-secondary text-center font-semibold'>Top Categories</h1>
        </div>
    <div className='pt-10'>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 md:mx-12'>
       {data.map(item => <Card3 key={item.title} img={item.img} title={item.title}  price={item.price}/>)} 
    </div> 
    </div>
    </div>
  )
}

export default TopCategories;
