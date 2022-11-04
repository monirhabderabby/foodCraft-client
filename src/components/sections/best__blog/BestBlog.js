import React from "react";
import grup10 from "../../../Assets/images/Group 10.png";
import img from "../../../Assets/images/Group 13.png";
import pizza from "../../../Assets/images/Rectangle 6.png";
import { Button } from "../../shared/button/Button";

export const BestBlog = () => {
    return (
        <div className="w-full h-auto lg:w-[1170px] lg:h-[567px] mx-auto my-[60px] lg:my-[160px]">
            <section className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-3 lg:px-0">
                <div className="relative">
                    <img className="w-full mb-[20px] lg:mb-0" src={img} alt="" />
                    <div className="absolute w-[256px] h-[125px] bg-white shadow-[0px_20px_70px_rgba(0,0,0,0.09)] rounded-[10px] -right-[100px] bottom-11">
                        <div className="flex h-full gap-x-[10px] items-center justify-center">
                            <div>
                                <img src={pizza} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-600 text-20px leading-30px font-Inter">Italian Pizza</h1>
                                <div className="flex gap-x-[5px]">
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z"
                                            fill="#FF8A01"
                                        />
                                    </svg>
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z"
                                            fill="#FF8A01"
                                        />
                                    </svg>
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z"
                                            fill="#FF8A01"
                                        />
                                    </svg>
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z"
                                            fill="#FF8A01"
                                        />
                                    </svg>
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.02447 1.08156C5.17415 0.620903 5.82585 0.620906 5.97553 1.08156L6.48381 2.6459C6.68462 3.26393 7.26056 3.68237 7.9104 3.68237H9.55524C10.0396 3.68237 10.241 4.30218 9.84913 4.58688L8.51843 5.5537C7.9927 5.93566 7.77271 6.61271 7.97352 7.23075L8.48181 8.79508C8.63148 9.25574 8.10424 9.6388 7.71238 9.3541L6.38168 8.38729C5.85595 8.00532 5.14405 8.00532 4.61832 8.38729L3.28762 9.3541C2.89576 9.6388 2.36852 9.25574 2.5182 8.79508L3.02648 7.23075C3.22729 6.61271 3.0073 5.93566 2.48157 5.5537L1.15087 4.58688C0.75901 4.30218 0.960399 3.68237 1.44476 3.68237H3.0896C3.73944 3.68237 4.31538 3.26393 4.51619 2.6459L5.02447 1.08156Z"
                                            stroke="#FF8A01"
                                        />
                                    </svg>
                                </div>
                                <span className="text-red font-Inter font-600 leading-30px text-[15px] mt-[11px]">
                                    $ <span>5.50</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" w-full lg:w-[427px] flex flex-col gap-y-[20px]">
                        <h1 className="font-600 text-[40px] lg:text-48px leading-58px text-[#021A49] font-serif">Best Quality Food Just For You</h1>
                        <p className="font-Inter font-400 lg:text-18px leading-30px text-light-gray">
                            We prioritize quality in each of our foods, below are the advantages of our food
                        </p>
                        <div className="my-[21px] flex flex-col gap-y-[10px]">
                            <div className="flex items-center gap-x-[14px]">
                                <img src={grup10} alt="" />
                                <span>Best service than others</span>
                            </div>
                            <div className="flex items-center gap-x-[14px]">
                                <img src={grup10} alt="" />
                                <span>Use experience staff than others</span>
                            </div>
                            <div className="flex items-center gap-x-[14px]">
                                <img src={grup10} alt="" />
                                <span>User friendly app</span>
                            </div>
                        </div>
                        <div className="flex">
                            <Button>Read More</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
