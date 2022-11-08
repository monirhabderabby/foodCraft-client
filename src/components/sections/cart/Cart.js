import { Stack } from "@mui/system";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../Assets/images/berger.png";
import { cartToggle } from "../../../Redux/features/carts/cartSlice";
import { Button } from "../../shared/button/Button";

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
                <span className="text-[24px] text-navy-blue font-600">Cart</span>
                <button className="px-3 py-1 bg-gray-600 text-white rounded-md">Clear</button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto py-4">
                <Stack spacing={2} direction="column">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[5px]">
                            <div>
                                <img className="w-[70px]" src={img} alt="berger" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h5 className="">Chicken Berger</h5>
                                <p>$2.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-[7px] px-[5px]">
                            <CiCirclePlus className="text-[20px]" />
                            <p className="text-[20px]">5</p>
                            <CiCircleMinus className="text-[20px]" />
                        </div>
                    </div>
                </Stack>
            </div>
            <div className="py-[20px]">
                <Stack spacing={"12px"} direction="column">
                    <div className="flex justify-between">
                        <input type="text" placeholder="Coupon" className="outline-none border-[0.5px] border-red rounded-2xl px-6 py-1" />
                        <button>Apply</button>
                    </div>
                    <div className="flex justify-between text-light-gray">
                        <span className="font-serif font-600 text-18px">Sub Total</span>
                        <span className="font-Inter font-400 text-18px">$10.00</span>
                    </div>
                    <div className="flex justify-between text-light-gray">
                        <span className="font-serif font-600 text-18px">Delivery</span>
                        <span className="font-Inter font-400 text-18px">$10.00</span>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <span className="font-serif font-600 text-18px">Total</span>
                        <span className="font-Inter font-400 text-18px">$10.00</span>
                    </div>
                </Stack>
            </div>
            <div>
                <Button>Checkout</Button>
            </div>
        </div>
    );
};
