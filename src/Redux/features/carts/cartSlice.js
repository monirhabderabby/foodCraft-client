import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartShow: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartToggle: (state, action) => {
            state.cartShow = !state.cartShow;
        },
    },
});

export default cartSlice.reducer;
export const { cartToggle } = cartSlice.actions;
