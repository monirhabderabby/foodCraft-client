import React from "react";
import { NavLink } from "react-router-dom";

export const PopulerLinks = () => {
    const links = [
        { id: 1, name: "All", path: "/" },
        { id: 2, name: "Breakfast", path: "breakfast" },
        { id: 3, name: "Lunch", path: "lunch" },
        { id: 4, name: "Dinner", path: "dinner" },
        { id: 5, name: "Deserts", path: "deserts" },
        { id: 6, name: "Beverage", path: "beverage" },
    ];
    return (
        <div className="flex items-center flex-wrap gap-[15px]">
            {links.map(link => {
                return (
                    <NavLink
                        to={link?.path}
                        className={({ isActive }) =>
                            isActive
                                ? "rounded-[19.5px] bg-red px-[24px] py-[5px] text-white"
                                : "px-[24px] py-[5px] rounded-[19.5px] border-[1px] bg-transparent border-[#686868]"
                        }
                    >
                        <span className="">{link?.name}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};
