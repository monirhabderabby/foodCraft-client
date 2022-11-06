import React from "react";
import { Link } from "react-router-dom";

export const CTA = () => {
    return (
        <div className="w-full max-w-[1170px] mx-auto my-[60px] lg:my-[160px]">
            <div className="bg-red h-auto lg:h-[445px] rounded-none lg:rounded-[47px] flex flex-col gap-y-[40px] items-center p-[35px] lg:p-[75px]">
                <h1 className="text-48px font-600 leading-58px text-white font-serif text-center">
                    Get Up To 50% Off When Making Transactions On Our App
                </h1>
                <p className="font-Inter font-400 text-18px leading-30px text-[#F0F0F0]">
                    Only available on the ios platform for now, or download demo android app?
                </p>
                <Link to="/" className="bg-white flex gap-x-[11px] items-center p-[12px] rounded-[29px]">
                    <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.0525 18.5918C24.9948 14.1626 28.8491 12.03 29.0216 11.9206C28.2668 10.8831 27.2632 10.0299 26.0932 9.43105C24.9232 8.83222 23.6201 8.50482 22.2908 8.47569C19.4143 8.20228 16.711 10.0615 15.215 10.0615C13.7768 10.0615 11.5332 8.47569 9.11714 8.53037C7.56222 8.58232 6.04742 9.01186 4.71786 9.77783C3.3883 10.5438 2.28853 11.6206 1.5239 12.9049C-1.69755 18.2637 0.716228 26.2473 3.88229 30.5672C5.43532 32.6998 7.27623 35.1058 9.69232 34.9964C12.0507 34.887 12.9138 33.5747 15.7325 33.5747C18.5513 33.5747 19.3567 34.9964 21.8304 34.9417C24.3619 34.887 25.9149 32.7544 27.468 30.6219C28.5866 29.1018 29.4414 27.4219 30 25.6458C28.5325 25.0647 27.2794 24.0846 26.3989 22.8292C25.5184 21.5738 25.0499 20.0993 25.0525 18.5918ZM20.3928 5.57755C21.7635 4.02141 22.4441 2.02204 22.2914 0C20.1985 0.178767 18.2603 1.11959 16.884 2.62473C15.676 3.9371 14.6404 6.01501 14.9283 8.03824C16.9988 8.20228 19.1276 7.05396 20.3928 5.57755Z"
                            fill="#F54748"
                        />
                    </svg>
                    <span>Download App</span>
                </Link>
            </div>
        </div>
    );
};
