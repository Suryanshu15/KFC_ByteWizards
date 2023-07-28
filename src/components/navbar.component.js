import React from "react";
import { BiMenu } from "react-icons/bi"
const NavSm = () => {
  return (
    <>
      <div className="text-red-600 flex justify-around">
        <div className="w-8 h-8">
          <BiMenu className="w-full h-full" />
        </div>
        <div className="">
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" className="w-full h-full" />

        </div>
        <div className="w-15 h-6">
          <button className="font-bold w-full h-full">Sign in</button>
        </div>
      </div>
    </>
  );
}

const NavMd = () => {
  return (
    <div className="container text-red-600 flex item-center justify-around">
        <div className="w-15 h-8">
          <BiMenu className="w-full h-full" />
        </div>

        <div className="w-20 h-10">
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" className="w-full h-full" />

        </div>
        <div className="w-15 h-8">
          <button className="font-bold w-full h-full">Sign in</button>
        </div>
    </div>
);
}

const NavLg = () => {
  return(
    <div className="container p-3 flex item-center justify-between">
      <div className="flex item-center w-full w-2/5">
        <div className="h-15 w-20">
          <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" 
          alt="logo"
          className="h-full w-full" />
        </div>
          <div className="w-full flex item-center bg-white gap-3 px-3 rounded-sm">
          <button className="px-5 font-bold" >Menu</button>
          <button className="px-5 font-bold">Deals</button>
        </div>
      </div>

      <div className="flex item-center justify-end w-1/5 px-2">
        <div className="w-4 h-4">
          <img src="//images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="" className="py-5" />
        </div>
        <button className="bg-white text-red-600 text-sm font-bold rounded-md px-4 py-4 h-10">Sign in</button>
        <span className="headerPrice py-4 px-0">₹0</span>
        <img src="//images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="" className="" />
      </div>   
    </div>
  );
}

const Navbar = () => {
  return (
    <>
    <nav className="bg-white">
    <div className="md:hidden p-4">{//mobile screen
      <NavSm />
    }
    </div>
    <div className="hidden lg:hidden md:flex p-4">{//tab screen
      <NavMd />
    }
    </div>
    <div className="hidden lg:flex h-20 ">{//large screen
      <NavLg />
    }
    </div>
    </nav>
    </>
  )

}

export default Navbar;
