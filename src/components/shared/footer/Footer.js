import React from "react";

export const Footer = () => {
    return (
        <footer class="relative bg-blueGray-200 pt-8 pb-6 max-w-[1170px] mx-auto">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-[24px] leading-[34px] font-Inter font-600 text-navy-blue">Food Craft</h4>
                        <h5 class="text-18px text-light-gray font-400 leading-30px font-Inter">
                            FFrom your neighber sushi spot to the food you crave, choose from over 300k+ local and national favourites acroa the U.S
                            Canada and Australia.
                        </h5>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="text-navy-blue text-20px leading-32px font-600 font-Inter">Support</span>
                                <ul class="list-unstyled space-y-[12px] mt-[23px]">
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://www.creative-tim.com/presentation?ref=njs-profile"
                                        >
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://blog.creative-tim.com?ref=njs-profile"
                                        >
                                            Support Center
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://www.github.com/creativetimofficial?ref=njs-profile"
                                        >
                                            Feedback
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                                        >
                                            Accecibility
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span class="text-navy-blue text-20px leading-32px font-600 font-Inter">our Menu</span>
                                <ul class="list-unstyled space-y-[12px] mt-[23px]">
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                        >
                                            MIT License
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://creative-tim.com/terms?ref=njs-profile"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://creative-tim.com/privacy?ref=njs-profile"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-light-gray hover:text-blueGray-800 font-400 block pb-2 text-sm"
                                            href="https://creative-tim.com/contact-us?ref=njs-profile"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2021</span>
                            <span> Notus JS by</span>
                            <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">
                                Creative Tim
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
