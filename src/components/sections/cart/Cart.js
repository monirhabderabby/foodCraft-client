import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartToggle } from "../../../Redux/features/carts/cartSlice";

export const Cart = () => {
    const { cartShow } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div
            className={`bg-white shadow-xl w-full lg:w-[400px] fixed top-0 right-0 h-screen z-30 px-6 ${
                cartShow ? "translate-x-0" : "translate-x-[100%]"
            } transition-[0.3s]`}
        >
            <div className="flex justify-between h-[60px] items-center">
                <AiOutlineArrowLeft className="text-[24px] text-light-gray" onClick={() => dispatch(cartToggle())} />
                <span>Cart</span>
                <button className="px-3 py-1 bg-red text-white rounded-sm">Clear</button>
            </div>
        </div>
    );
};
