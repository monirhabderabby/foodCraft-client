import React from "react";
import banner from "../../../Assets/images/emotive-beautiful-lady-bites-delicious-pizza-looks-directly-has-time-snack-visits-pizzeria-surprised-with-low-prices-models-yellow-wall-people-fast-food-nutrition-transformed 1.png";
import { Button } from "../../shared/button/Button";

export const Banner = () => {
    return (
        <div className="h-[calc(100vh-80px)] w-full max-w-[1300px] mx-auto">
            <section className="h-full flex justify-between items-center hidden">
                <div className="">
                    <div className="w-[554px] flex flex-col gap-y-[30px]">
                        <h3 className="font-serif font-600 text-75px leading-85px text-navy-blue">Be The Fastest In Delivering Your Food</h3>
                        <p className="font-Inter font-400 text-20px leading-32px text-light-gray">
                            From your neighbrhood sushi spot to the burger you crave, choose from over 3000k+ local and national favorites
                        </p>
                        <div className="flex">
                            <Button>Order Now</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-[500px] w-[488px] rounded-full bg-red relative">
                        <img className="absolute bottom-0 h-[600px] w-[488px] rounded-full" src={banner} alt="banner" />
                    </div>
                </div>
            </section>
        </div>
    );
};
