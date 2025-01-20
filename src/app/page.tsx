import React from 'react'
import Hero from './components/Hero';
import UniqueFeatures from './components/UniqueFeatures';
import DiscountItems from './components/DiscountItems';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProducts from './components/LatestProducts';
import ShopexOffer from './components/ShopexOffer';
import TrendingProducts from './components/TrendingProducts';
import Banner from './components/Banner';
import LatestBlog from './components/LatestBlog';
import TopCategories from './components/TopCategories';
import NewArrival from './components/NewArrival';
import Products from './Products/page';

const HomePage = () => {
  return (
    <div>
     <Hero />
     <NewArrival />
     <Products/>
     <FeaturedProducts />
     <LatestProducts />
     <ShopexOffer />
     <UniqueFeatures />
     <TrendingProducts />
     <DiscountItems />
     <TopCategories />
     <Banner />
     <LatestBlog />
    
    </div>
  )
}

export default HomePage;
