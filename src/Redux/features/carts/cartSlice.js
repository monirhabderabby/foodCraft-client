import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartShow: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartToggle: (state, action) => {
            state.cartShow = !state.cartShow;
        },
        addItemToCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },
    },
});

export default cartSlice.reducer;
export const { cartToggle, addItemToCart } = cartSlice.actions;
