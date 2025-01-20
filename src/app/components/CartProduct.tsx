import { useAppDispatch } from "@/redux/features/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";

interface propsType {
    id: number;
    img: string;
    name: string;
    price: number;
    quantity: number;
}

const CartProduct: React.FC<propsType> = ({
    id,
    img,
    name,
    price,
    quantity,
}) => {
    const dispatch = useAppDispatch();

    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Image 
                className="h-[80px]" 
                src={img} 
                alt={name} 
                width={80}
                height={80}
                />
                <div className="space-y-2">
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-[14px]">
                     {quantity} * ${price}.00
                    </p>
                </div>
            </div>

            <RxCross1
            className="cursor-pointer"
            onClick={() => dispatch(removeFromCart(id))}
            />
        </div>
    );
};

export default CartProduct;