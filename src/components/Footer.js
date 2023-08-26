import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 text-white py-20 w-full h-full ">
                <div className="grid  items-start sm:ml-4 px-8 gap-4 sm:grid md:grid md:place-content-center lg:flex lg:ml-40 lg:gap-5">
                    <div className="w-full h-full flex justify-center align-middle  md:w-full md:h-full">
                        <img
                            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg "
                            alt="logo"
                            className="h-16 w-16 py-2 md:h-24 md:w-24 "
                        />
                    </div>
                    <div>
                        <li className="list-none ">
                            <ul>Legal</ul>
                            <ul>Term and condition</ul>
                            <ul>Privacy Policy</ul>
                            <ul>Disclamier</ul>
                            <ul>Cution Notice</ul>
                        </li>
                    </div>
                    <div>
                        <li className="list-none ">
                            <ul>KFC India</ul>
                            <ul>About KFC</ul>
                            <ul>KFC Care </ul>
                            <ul>Careers</ul>
                            <ul>Our Golden Past</ul>
                        </li>
                    </div>
                    <div>
                        <li className="list-none ">
                            <ul>KFC Food</ul>
                            <ul>Menu</ul>
                            <ul>Order Looking </ul>
                            <ul>Gift Card</ul>
                            <ul>Nutrition</ul>
                        </li>
                    </div>
                    <div>
                        <li className="list-none ">
                            <ul>Get Help</ul>
                            <ul>Menu</ul>
                            <ul>Contact Us </ul>
                            <ul>Feedback</ul>
                            <ul>Policy</ul>
                        </li>
                    </div>
                    <div className="flex w-full h-full
                             md: 
                             lg: gap-1 lg:grid ">
                        <div className="w-24 h-16 sm:w-32 sm:h-24">
                            <Link to="https://play.google.com/store/apps/details?id=com.application.zomato">
                                <img
                                    src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
                                    alt="Playstore"
                                    className="h-full w-full"
                                />
                            </Link>
                        </div>
                        <div className="w-24 h-16 sm:w-32 sm:h-24">
                            <Link to=" https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896">
                                <img
                                    src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
                                    alt="Playstore"
                                    className=" h-full w-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
