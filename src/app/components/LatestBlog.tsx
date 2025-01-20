import React from 'react'
import Card2 from './Card2';

const data = [
    {
        img: "/Image/blog1.svg",
        title: "Top esssential Trends in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        link: "Read More"
    },
    {
        img: "/Image/blog2.svg",
        title: "Top esssential Trends in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        link: "Read More"
    },
    {
        img: "/Image/blog3.svg",
        title: "Top esssential Trends in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        link: "Read More"
    },
    
];

const LatestBlogs = () => {
  return (
    <div className='mt-8 mb-8'>
    <div>
      <h1 className='text-2xl text-secondary text-center font-semibold'>Leatest Blog</h1>
    </div>
    <div className='pt-10'>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
       {data.map(item => <Card2 key={item.title} img={item.img} title={item.title} desc={item.desc} link={item.link}/>)} 
    </div> 
    </div>
    </div>
  )
}

export default LatestBlogs;
