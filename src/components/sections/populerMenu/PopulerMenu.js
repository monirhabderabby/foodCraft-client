import React from "react";
import { Outlet } from "react-router-dom";
import { PopulerLinks } from "./PopulerLinks";

export const PopulerMenu = () => {
    return (
        <div className="w-full bg-light-red h-auto transition-[0.5s] py-[75px]">
            <div className="max-w-[1170px] h-auto mx-auto">
                <div className="w-full h-full flex flex-col gap-y-[20px] items-center ">
                    <h1 className="font-600 text-navy-blue font-serif text-48px leading-58px">Our Populer Menu</h1>
                    <p className="text-14px font-400 font-Inter leading-30px text-light-gray mb-[19px]">
                        From your neighborhood sushi spot to the burger and fries you crave
                    </p>
                    <PopulerLinks />
                </div>
                <Outlet />
            </div>
        </div>
    );
};
