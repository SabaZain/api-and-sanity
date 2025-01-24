import { client } from '@/sanity/lib/client';
import Image from 'next/image';


export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  // Query to fetch product details from Sanity
  const query = `*[_type == "product" && slug.current == "${slug}"]{
    name,
    category,
    stockLevel,
    price,
    discountPercentage,
    description,
    "imageUrl": image.asset->url
  }[0]`;

  // Fetch product data from Sanity
  const data = await client.fetch(query);

 // If no product is found, return a fallback message
 if (!data) {
  return <div className="text-center text-white">Product not found.</div>;
}
 
   return (
    <div className='bg-black px-3 pb-4'>
      {/* Product Name */}
      <h1 className="text-2xl md:text-3xl lg:text-3xl text-center text-orange-700 font-bold p-3 pt-6">{data.name}</h1>
      <h2 className="text-4xl text-center text-purple-950 font-bold p-3 pt-6">Category: {data.category}</h2>
      <p className='text-center text-2xl text-blue-900'>Stock Level: {data.stockLevel}</p>
      
      {/* Product Image */}
      <div className="flex justify-center items-center">
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={`Image for ${data.name}`} // More descriptive alt text
            height={400}
            width={400}
            layout="intrinsic"
            loading="lazy"
          />
        )}
      </div>

      {/* Product Description */}
      <p className="text-center text-2xl md:text-3xl lg:text-3xl text-white font-semibold p-3">
        {data.description}
      </p>
      
      <p className="text-center text-2xl text-green-900">Price After Discount: ${data.price}</p>
      <p className="text-center text-xl text-red-900">Discount Percentage:  ${data.discountPercentage}%</p>
    </div>
  );
}

