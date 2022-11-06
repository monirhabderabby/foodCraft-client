import React from "react";
import berger from "../../../Assets/images/berger.png";

export const All = () => {
    const products = [1, 2, 3];
    return (
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3">
            {products?.map(product => {
                return (
                    <div className="w-[370px] h-[423px] bg-white rounded-21px p-[20px]">
                        <div className="relative">
                            <img src={berger} className="rounded-[20px]" alt="" />
                        </div>
                        <div className="content mt-[19px]">
                            <h1 className="text-18px text-navy-blue font-600 leading-30px font-Inter w-[206px]">
                                Hamburger Street Food Seafood Fast Food
                            </h1>
                            <div className="mt-[12px] flex justify-between">
                                <span className="font-Inter font-600 text-[24px] leading-34px text-yellow">$15.0</span>
                                <button className="border-[1px] border-light-gray px-[22px] bg-transparent py-[10px] rounded-21px relative hover:border-yellow transition-[0.3s]">
                                    <span className=" bg-transparent z-50 ">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
