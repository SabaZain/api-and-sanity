import React from 'react'
import Card1 from '../components/Card1';

const data = [
    
    {
        img: "/Image/LP22.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
        
    },
    {
        img: "/Image/product1.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
    },
    {
        img: "/Image/product2.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
    },
    {
        img: "/Image/TP1.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
    },
    {
        img: "/Image/camera.svg",
        title: "Camera",
        desc: "$60.00",
        price: 85.00
    },
    {
        img: "/Image/headphones.svg",
        title: "Headphones",
        desc: "$50.00",
        price: 65.00
    },
    {
        img: "/Image/smartwatch.svg",
        title: "Smart Watch",
        desc: "$50.00",
        price: 65.00
    },
    {
        img: "/Image/LP4.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
        
    },
    {
        img: "/Image/product3.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
    },
    {
        img: "/Image/LP5.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
        
    },
    {
        img: "/Image/LP6.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
        
    },
];

const Shop = () => {
  return (
    <div className='pt-4'>
    <div>
      <h1 className='text-3xl text-secondary text-center font-semibold'>Shop</h1>
    </div>
    
    <div className='pt-10'>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
       {data.map(item => <Card1 key={item.title} img={item.img} title={item.title} desc={item.desc} price={item.price}/>)} 
    </div> 
    </div>
    </div>
  )
}

export default Shop;
