"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/features/hooks';
import { IoIosHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IProduct } from '../components/productCard';



interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  price: string;
  discountPercentage: number;
  imageUrl: string;
  quantity: number;
}

const tabsData: string[] = ["ALL"];

const ProductsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const shuffleArray = (array: Product[]): Product[] => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await client.fetch(
          `*[_type == "product"] {
            name,
            category,
            description,
            price,
            discountPercentage,
            "slug": slug.current,
            "imageUrl": image.asset->url
          }`
        );
        setData(shuffleArray(fetchedData).slice(0, 41));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTab = (index: number) => {
    const category = tabsData[index].toUpperCase();
    setSelectedTab(index);

    if (category === "ALL") {
      setData(shuffleArray(data).slice(0, 41));
      return;
    }

    const filterData = data.filter((item) => item.category.includes(category));
    setData(shuffleArray(filterData));
  };

  const router = useRouter();
  const dispatch = useAppDispatch();

  const addProductToCart = (product: Product) => {
    const payload:IProduct = {
      id:product.slug , // You could use slug as the unique ID for the product
      name: product.name,
      img: product.imageUrl,
      price: product.price,
      quantity: 1,
      
    };
    dispatch(addToCart(payload))
    ;
  };

  if (loading) return <div className="font-bold">Loading products...</div>;

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-6 p-6 mx-6">
        <h1 className="font-bold text-center text-3xl">Products List</h1>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-[20px]">
          {tabsData.map((text, index) => (
            <li
              key={text}
              className={`${selectedTab === index ? "text-accent" : ""} cursor-pointer hover:text-accent`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3">
        {data.map((product, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto border border-black rounded-lg shadow-lg overflow-hidden m-2 bg-slate-300 hover:bg-purple-500"
          >
            <div
              className="border-spacing-y-4 bg-white rounded-sm relative group cursor-pointer"
              onClick={() => router.push(`/product/${product.slug}`)}
            >
              <Image
                src={product.imageUrl}
                alt={`Image for ${product.name}`}
                height={200}
                width={200}
                className="object-right-bottom ml-20 h-48"
              />
              <div className="w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
                <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
                  <div className="bg-white w-[50px] h-[50px] text-[26px] font-serif grid place-items-center">
                    <IoIosHeart />
                  </div>
                  <div
                    className="bg-white w-[50px] h-[50px] text-[26px] font-serif grid place-items-center cursor-pointer"
                    onClick={() => addProductToCart(product)}
                  >
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-[18px] text-center font-bold">{product.name}</h2>
              <h2 className="text-[18px] text-center font-bold">Category: {product.category}</h2>
              <p className="text-md text-center line-clamp-3">{product.description}</p>
              <h3 className="text-xl text-center font-bold">Price: ${product.price}</h3>
              <h4 className="text-xl text-center font-bold">
                Discount Percentage: {product.discountPercentage}%
              </h4>
              <div>
              <Link href={`/product/${product.slug}`} passHref>
                <h3 className="text-center text-blue-900 hover:text-red-800 bg-black hover:bg-white rounded-md p-1 mt-2 cursor-pointer">
                  Read More
                </h3>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;