import React from "react";
import img from "../../../Assets/images/beauty-woman-asian-cute-girl-feel-happy-eating-diet-food-fresh-salad-good-health-pink-background-transformed 1.png";

export const Testmonials = () => {
    return (
        <div className="w-full max-w-[1170px] mx-auto my-[60px] lg:py-[160px]">
            <div className="flex justify-between items-end">
                <div className="flex-end">
                    <div className="flex flex-col w-full lg:w-[540px]">
                        <h1 className="text-48px text-navy-blue font-600 font-serif leading-58px ">Our Lovely Customer Loves Our Food</h1>
                        <p className="text-light-gray text-18px font-Inter font-400 mt-[30px]">
                            “Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Condectetur magni dolores eos qui
                            ratione voluptatejn sequi nestuist, Lorem ipsum dolor sit amet, Consectetur adipopscing elit, Sed do eisum temoor
                            incididunt ut labore et dolore magna aliquo!.
                        </p>
                        <div className="flex flex-col mt-[12px]">
                            <span className="text-navy-blue text-[24px] font-600 font-Inter leading-[34px]">Courtney Henry</span>
                            <span className="text-18px text-light-gray leading-30px font-Inter">Sylhet, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-x-[12px] mt-[12px]">
                            <button className="bg-transparent border-[2px] border-[#D5D1D1] h-[31px] w-[31px] flex justify-center items-center rounded-full">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM16 7L0.999999 7V9L16 9V7Z"
                                        fill="#D5D1D1"
                                    />
                                </svg>
                            </button>
                            <button className="bg-red h-[31px] w-[31px] flex justify-center items-center rounded-full">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative bg-red w-[476px] h-[447px] rounded-[200px_0px_0px_0px]">
                    <img className="absolute bottom-0 left-[50px]" src={img} alt="women" />
                </div>
            </div>
        </div>
    );
};
