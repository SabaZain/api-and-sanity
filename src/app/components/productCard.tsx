import React from 'react'
import Image from 'next/image'
import { IoIosHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/features/hooks';

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category:string[];
}

const ProductCard = ({id, img, name, price, category}: IProduct) => {

  const router = useRouter();
  const dispatch = useAppDispatch()

  const getRating = () => {
    const randomNumber = (min: number, max: number) =>{
      return Math.ceil(Math.random() * (max - min) + min);
    };
  
    switch(randomNumber(0, 5)){
      case 0:
        return(
          <div className='flex justify-center text-pink-400 pt-4 pb-2'>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          </div>
        );
        
        case 1:
          return(
            <div className='flex justify-center text-pink-400 pt-4 pb-2'>
            <BsFillStarFill />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar/>
            </div>
          );

          case 2:
          return(
            <div className='flex justify-center text-pink-400 pt-4 pb-2'>
            <BsFillStarFill />
            <BsFillStarFill />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar/>
            </div>
          );

          case 3:
          return(
            <div className='flex justify-center text-pink-400 pt-4 pb-2'>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <FaRegStar />
            <FaRegStar/>
            </div>
          );

          case 4:
            return(
              <div className='flex justify-center text-pink-400 pt-4 pb-2'>
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <FaRegStar/>
              </div>
            );

            case 5:
            return(
              <div className='flex justify-center text-pink-400 pt-4 pb-2'>
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill/>
              </div>
            );

        default:
          return <div></div>
          
  
    }
  };

  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation()
    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1
    }
    dispatch(addToCart(payload));
}

return (
    <div className='bg-slate-400 border border-black rounded-sm shadow-inner shadow-slate-400 mx-4'>
      <div className=' border-spacing-y-4 bg-white rounded-sm relative group cursor-pointer' 
      onClick={() => router.push(`/details/${id}`)}>
        <Image 
        className='w-full h-60' 
        width={800} 
        height={1000} 
        src={img} 
        alt={name} 
        />

        <div className='w-full opacity-0 transition-opacity duration-500
        group-hover:opacity-100 cursor-pointer'>
          <div className='absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2'>
          <div className='bg-white w-[50px] h-[50px] text-[26px] font-serif grid place-items-center'>
          <IoIosHeart />
          </div>

          <div className='bg-white w-[50px] h-[50px] text-[26px] font-serif grid place-items-center cursor-pointer'
          onClick={addProductToCart}>
          <FaShoppingCart/>
          </div>
        </div>
      </div>
    </div>
    {getRating()}
    <h1>{category}</h1>
<h2 className='font-medium pb-3 hover:text-accent'>{name}</h2>
<p className='text-gray-800 font-light'>${price}.00</p>
  </div>
  );
}

export default ProductCard;
