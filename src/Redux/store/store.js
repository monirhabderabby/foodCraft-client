import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import cartSlice from "../features/carts/cartSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filter: filterSlice,
        cart: cartSlice,
        devTools: process.env.NODE_ENV !== "production",
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
