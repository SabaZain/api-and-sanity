import React from 'react'
import Card1 from './Card1';

const data = [
    {
        img: "/Image/LP1.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
    },
    {
        img: "/Image/LP22.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
        
    },
    {
        img: "/Image/LP3.svg",
        title: "Comfort Handy Craft",
        desc: "$42.00",
        price: 65.00
        
    },
    {
        img: "/Image/LP4.svg",
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

const LatestProducts = () => {
  return (
    <div className='pt-4'>
    <div>
      <h1 className='text-2xl text-secondary text-center font-semibold'>Leatest Products</h1>
    </div>
    <div>
        <ul className='flex justify-center align items-center gap-6 mt-4'>
            <li className='text-main'>New Arrival</li>
            <li className='text-secondary'>Best Seller</li>
            <li className='text-secondary'>Featured</li>
            <li className='text-secondary'>Special Offer</li>
        </ul>
    </div>
    <div className='pt-10'>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
       {data.map(item => <Card1 key={item.title} img={item.img} title={item.title} desc={item.desc} price={item.price}/>)} 
    </div> 
    </div>
    </div>
  )
}

export default LatestProducts;
