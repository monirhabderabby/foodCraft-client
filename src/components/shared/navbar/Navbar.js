import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { default as cart, default as shopping } from "../../../Assets/icons/Orion_shopping-basket 1.svg";
import { auth } from "../../../firebase/firebase.init";
import { cartToggle } from "../../../Redux/features/carts/cartSlice";
import { Button } from "../button/Button";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [user, loading, error] = useAuthState(auth);

    if (loading || error) return;

    return (
        <div className="max-w-[1300px] mx-auto">
            <section className="justify-between h-[80px] items-center hidden lg:flex ">
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
                            <img src={cart} alt="cart" onClick={() => dispatch(cartToggle())} />
                        </li>
                        <li>
                            {user ? (
                                <div>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        id="basic-button"
                                        aria-controls={openMenu ? "basic-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openMenu ? "true" : undefined}
                                        onClick={handleClick}
                                    />
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openMenu}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            "aria-labelledby": "basic-button",
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>My Orders</MenuItem>
                                        <MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            ) : (
                                <Link to="/login">
                                    <Button>Login</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </section>
            {/*mobile device navabr*/}
            <section className="flex justify-between items-center h-[60px] lg:hidden px-3 w-full z-50">
                <div>
                    <h1 className="font-600 font-Inter text-[16px] leading-34px text-red">Food Craft</h1>
                </div>
                <div className="flex items-center h-full gap-x-[10px]">
                    <img src={shopping} className="h-[24px]" alt="shopping" onClick={() => dispatch(cartToggle())} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" onClick={() => setOpen(!open)}>
                        <path
                            fill="#000"
                            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z"
                        />
                    </svg>
                </div>
            </section>
            {/*navlink for mbile device*/}
            {open && (
                <div className={`fixed right-0 top-0 w-full h-screen lg:hidden bg-black/90 z-50`}>
                    <div className="w-full flex justify-end">
                        <AiOutlineClose className="text-white text-[24px] mt-4 mr-4" onClick={() => setOpen(!open)} />
                    </div>
                    <ul className="flex flex-col gap-y-[10px] px-3 py-3 w-full">
                        <li className="text-[20px] cursor-pointer leading-32px font-Inter font-400 text-white">Home</li>
                        <li className="text-[20px] cursor-pointer leading-32px font-Inter font-400 text-white">About</li>
                        <li className="text-[20px] cursor-pointer leading-32px font-Inter font-400 text-white">Deliver</li>
                        <li className="text-[20px] cursor-pointer leading-32px font-Inter font-400 text-white">Service</li>
                        <li className="text-[20px] cursor-pointer leading-32px font-Inter font-400 text-white">Restuarants</li>
                        <li>
                            <button className="bg-white w-full py-[9px] px-[27px] font-Inter text-20px text-red rounded-sm">Login</button>
                        </li>
                    </ul>
                </div>
            )}
            {/* {cartShow && <Cart />} */}
        </div>
    );
};
