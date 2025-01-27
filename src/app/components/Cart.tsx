import { useAppSelector, useAppDispatch } from "@/redux/features/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import {Dispatch, SetStateAction} from "react";
import Link from "next/link";
import { clearCart } from "@/redux/features/cartSlice";



interface CartProductType{
    id: any;
    img:string;
    name:string;
    price:string;
    quantity:number;
}

interface CartProps {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowCart}:CartProps) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.cartReducer);
    

    const getTotal = () => {
        let total = 0;
        products.forEach((item: CartProductType) => {
            const price = parseFloat(item.price); // Convert price to number
            if (!isNaN(price)) { // Check if the conversion was successful
                total += price * item.quantity;
            } 
        });
        return total;
    };

    const totalAmount = getTotal();

    const handleCheckout = () => {
        dispatch(clearCart());
        setShowCart(false);
    }

    
    return(
        <div className="w-full min-h-screen fixed top-0 z-20 overflow-y-scroll">
            <div className="max-w-[400px] w-full min-h-full bg-gray-600 absolute right-0 top-0 p-6 ml-6 md:ml-0 lg:ml-0">
                <RxCross1
                className="absolute right-0 top-0 m-6 mx-10 text-[24px] cursor-pointer"
                onClick={() => setShowCart(false)}
                />
                <h3 className="pt-6 pl-3 text-lg font-bold uppercase">
                Your Cart
                </h3>

                <div className="mt-6 space-y-2 px-5">
                 {products?.map((item:CartProductType) => (
                    <CartProduct
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    />
                 ))}
                </div>

                <div className="flex justify-between items-center font-medium text-xl py-4 px-5">
                    <p>Total:</p>
                    <p>${getTotal()}.00</p>
                </div>

                {totalAmount > 0 ? (
                <Link href="/Checkout?totalAmount=${totalAmount}">
                <button 
                className="bg-black text-white text-center w-full rounded-3xl py-2 px-2
                hover:bg-accent mb-4 mt-4"
                onClick={handleCheckout}
                >
                  Checkout To Proceed
                </button>
                </Link>
            ) : (
                <div className="text-center text-[20px] text-red-700 font-semibold">
                Please select products to add in cart.
                </div>
            )}
            </div>
          </div>
    );
};

export default Cart;