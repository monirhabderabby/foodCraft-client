import React from "react";
import cart from "../../../Assets/icons/Orion_shopping-basket 1.svg";
import { Button } from "../button/Button";

export const Navbar = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <section className="flex justify-between h-[80px] items-center">
                <div>
                    <h1 className="font-600 font-Inter text-[24px] leading-34px text-red">Food Craft</h1>
                </div>
                <div>
                    <ul className="flex gap-x-[40px]">
                        <li className="text-[24px] cursor-pointer leading-32px font-Inter font-600 text-red">Home</li>
                        <li className="text-[24px] cursor-pointer leading-32px font-Inter font-400 text-light-gray">About</li>
                        <li className="text-[24px] cursor-pointer leading-32px font-Inter font-400 text-light-gray">Deliver</li>
                        <li className="text-[24px] cursor-pointer leading-32px font-Inter font-400 text-light-gray">Service</li>
                        <li className="text-[24px] cursor-pointer leading-32px font-Inter font-400 text-light-gray">Restuarants</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center gap-x-[13px]">
                        <li>
                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="11.5" r="10.5" stroke="#686868" stroke-width="1.5" />
                                <line x1="19.5303" y1="18.4697" x2="24.5303" y2="23.4697" stroke="#686868" stroke-width="1.5" />
                            </svg>
                        </li>
                        <li>
                            <img src={cart} alt="cart" />
                        </li>
                        <li>
                            <Button>Login</Button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};
