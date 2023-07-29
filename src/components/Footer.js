import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className='bg-gray-800 text-white py-20'>
        <div className=' w-3/4 ml-40 gap-16 flex items-start'>
            <div className='px-4 h-50 w-50'>
                <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg " alt="logo" className='h-full w-full py-2'/>
            </div>
            <div> 
                <li className='list-none'>
                    <ul>Legal</ul>
                    <ul>Term and condition</ul>
                    <ul>Privacy Policy</ul>
                    <ul>Disclamier</ul>
                    <ul>Cution Notice</ul>
                </li>
            </div>
            <div>
                <li className='list-none lg:block sm:hidden md:hidden'>
                <ul>KFC India</ul>
                <ul>About KFC</ul>
                <ul>KFC Care </ul>   
                <ul>Careers</ul>
                <ul>Our Golden Past</ul>
                </li>
            </div>
            <div>
            <li className='list-none lg:block sm:hidden md:hidden'>
                <ul>KFC Food</ul>
                <ul>Menu</ul>
                <ul>Order Looking </ul>   
                <ul>Gift Card</ul>
                <ul>Nutrition</ul>
                </li>
            </div>
            <div><li className='list-none lg:block sm:hidden md:hidden'>
                <ul>Get Help</ul>
                <ul>Menu</ul>
                <ul>Contact Us </ul>   
                <ul>Feedback</ul>
                <ul>Policy</ul>
                </li></div>
            <div></div>
            <div className='w-40 h-16'>
                <Link to="https://play.google.com/store/apps/details?id=com.application.zomato">
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="Playstore" className='h-full w-full' />
                </Link>
            </div>
            <div className='w-40 h-16'>
            <Link to=' https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896'> 
            <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="Playstore" className=' h-full w-full' />
            </Link>
            </div>
        </div>
        </div>
        </>
    );
};

export default Footer;