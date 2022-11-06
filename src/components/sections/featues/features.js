import React from "react";
import "../../../App.css";
import communityIcon from "../../../Assets/icons/Group 19.png";
import leaf from "../../../Assets/icons/Orion_bread-loaf 1.png";
import dinerIcon from "../../../Assets/icons/Orion_dinner 1.png";
import breadIcon from "../../../Assets/icons/Orion_french-bread 1.png";
import cheff from "../../../Assets/images/portrait-happy-male-chef-dressed-uniform-transformed 1.png";

export const Features = () => {
    return (
        <div className="w-full h-auto lg:w-[1170px] lg:h-[567px] mx-auto my-[60px] lg:my-[160px]">
            <section className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-3 lg:px-0">
                <div>
                    <div className=" w-full lg:w-[427px] flex flex-col gap-y-[20px]">
                        <h1 className="font-600 text-[40px] lg:text-48px leading-58px text-[#021A49] font-serif">Every Flavour Welcome</h1>
                        <p className="font-Inter font-400 lg:text-18px leading-30px text-light-gray">
                            From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national
                        </p>
                        <div className="flex mt-[31px]">
                            <button className="w-[382px] h-[118px] flex items-center px-[20px] py-[29px] gap-x-[18px] bg-light-red rounded-[13px]">
                                <img src={communityIcon} alt="community" />
                                <div>
                                    <h1 className="text-navy-blue text-20px leading-32px font-600 font-Inter">All in one app</h1>
                                    <p className="text-[16px] font-400 font-Inter leading-26px text-light-gray">
                                        Add a community to your course, helpp your students connect
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-[470px] h-[324px] bg-red rounded-[200px_0px_0px_0px] relative">
                        <img className="w-full absolute bottom-0 right-0" src={cheff} alt="" />
                        <div className="w-[191px] h-[188px] shadow-[0px_20px_70px_rgba(0,0,0,0.09)] absolute bg-white p-[22px] rounded-[13px] left-[-50px] top-[-130px]">
                            <div className="flex flex-col gap-y-[11px]">
                                <h1>Quality Food</h1>
                                <div className="flex w-[143px] h-[29px] gap-x-[9px] bg-light-red px-[8px] items-center rounded-[5px]">
                                    <img src={breadIcon} alt="breadIcon" />
                                    <span className="text-navy-blue text-14px leading-26px font-600 font-Inter">Break Fast</span>
                                </div>
                                <div className="flex w-[143px] h-[29px] gap-x-[9px] bg-light-red px-[8px] items-center rounded-[5px]">
                                    <img src={leaf} alt="breadIcon" />
                                    <span className="text-navy-blue text-14px leading-26px font-600 font-Inter">Lunch</span>
                                </div>
                                <div className="flex w-[143px] h-[29px] gap-x-[9px] bg-light-red px-[8px] items-center rounded-[5px]">
                                    <img src={dinerIcon} alt="breadIcon" />
                                    <span className="text-navy-blue text-14px leading-26px font-600 font-Inter">Break Fast</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
