import React from "react";

export const SingleProduct = ({ product }) => {
    const { images, name, price } = product;
    return (
        <div className="w-[370px] h-[423px] bg-white rounded-21px p-[20px]">
            <div className="relative">
                <img src={images[0].img} className="rounded-[20px] w-full h-[249px]" alt="food" />
                <div className="flex gap-x-[12px] items-center absolute top-5 left-5">
                    <div className="w-[36px] h-[36px] flex justify-center items-center bg-[rgba(253,197,94,0.5)] rounded-full">
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.6875 18.9653C11.6407 18.3077 16 10.4848 16 6.4C16 3.25009 14.4062 1 12.25 1C10.422 1 8.92175 3.04222 8.5 4.63471C8.07825 3.04222 6.578 1 4.75 1C2.59375 1 1 3.25009 1 6.4C1 10.4848 5.3595 18.3077 8.3125 18.9653C8.37432 18.9838 8.437 18.9954 8.5 19C8.56127 18.9769 8.62426 18.9652 8.6875 18.9653V18.9653Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                        <svg className="h-[30px] w-[30px]" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z"
                                fill="#FF8A01"
                            />
                        </svg>
                        <span className="text-white text-18px font-600 font-Inter leading-30px">4.5</span>
                    </div>
                </div>
            </div>
            <div className="content mt-[19px]">
                <h1 className="text-18px text-navy-blue font-600 leading-30px font-Inter w-[206px]">{name}</h1>
                <div className="mt-[12px] flex justify-between">
                    <span className="font-Inter font-600 text-[24px] leading-34px text-yellow">
                        $<span>{price}</span>
                    </span>
                    <button className="border-[1px] border-light-gray px-[22px] bg-transparent py-[10px] rounded-21px relative hover:border-yellow transition-[0.3s]">
                        <span className=" bg-transparent z-50">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
