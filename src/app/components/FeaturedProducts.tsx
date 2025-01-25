import React from 'react'
import Card from './Card';

const data = [
    {
        img: "/Image/product1.svg",
        title: "Cantilever chair",
        desc: "Code - Y523201",
        price: "42.00"
    },
    {
        img: "/Image/product2.svg",
        title: "Cantilever chair",
        desc: "Code - Y523201",
        price: "42.00"
    },
    {
        img: "/Image/product3.svg",
        title: "Cantilever chair",
        desc: "Code - Y523201",
        price: "42.00"
    },
    {
        img: "/Image/product4.svg",
        title: "Cantilever chair",
        desc: "Code - Y523201",
        price: "42.00"
    },
];

const FeaturedProducts = () => {
  return (
    <div className='pt-4'>
    <div>
          <h1 className='text-2xl text-secondary text-center font-semibold'>Featured Products</h1>
        </div>
    <div className='pt-10'>
     <div className='grid md:grid-cols-2 gap-y-1 lg:gap-y-1 lg:grid-cols-4 gap-12'>
       {data.map(item => <Card key={item.title} img={item.img} title={item.title} desc={item.desc} price={item.price}/>)} 
    </div> 
    </div>
    </div>
  )
}

export default FeaturedProducts;
