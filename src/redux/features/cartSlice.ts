import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct{
    id: number | string;
    name: string;
    img: string;
    price: string;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct> ) => {

            if(state.findIndex((pro) => pro.id === action.payload.id) === -1){
                state.push(action.payload)
            } else {
        return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1}
            : item
        );
    }
},

removeFromCart: (state, action: PayloadAction<number> ) => {
    const id = action.payload;
    return state.filter((item) => item.id !== id);
   },
   clearCart:() => {
    return [];
   }
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;