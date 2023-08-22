import React from "react";
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const NavSm = () => {
  const { loginWithRedirect,isAuthenticated,logout,isLoading,user } = useAuth0();
  return (

    <>
      <div className="text-red-600 flex justify-between">
        <div className="w-12 h-8">
          <BiMenu />
        </div>
        <div className="">
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" className="w-full h-full" />

        </div>
        <div className="w-16 h-6">
          <button className="font-bold w-full h-full">Sign in</button>
          
        </div>
      </div>
    </>
  );
}

const NavMd = () => {
  const { loginWithRedirect,isAuthenticated,logout,isLoading,user } = useAuth0();
  return (
    <div className="container text-red-600 flex item-center justify-around">
        <div className="w-15 h-8">
          <BiMenu />
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
  const { loginWithRedirect,isAuthenticated,logout,isLoading,user } = useAuth0();

  return(
    <div className="container p-3 flex item-center justify-between">
      <div className="flex item-center w-full w-2/5">
        <Link to="/" className="h-15 w-20">
          <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" 
          alt="logo"
          className="h-full w-full" />
        </Link>
          <div className="w-full flex item-center bg-white gap-3 px-3 py-4 rounded-sm">
          <Link  to="/menu" className="px-5 font-bold" >Menu</Link>
          <Link to="/deal" className="px-5 font-bold" >Deals</Link>
        </div>
      </div>

      <div className="flex item-center justify-end w-1/5 px-2">
        
        {isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{user.name}</button>
          
          )
          :(
            <button onClick={() => loginWithRedirect()}>Sign in</button>
          )}
        
        <Link to="/cart"  className="h-15 w-20">
          <img src="//images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="cart" className="h-full w-full" />
        </Link>
      </div>   
    </div>
  );
}

const Navbar = () => {
  
  
  return (
    <>
    <nav className="bg-white">
    <div className="md:hidden p-4 w-full">{//mobile screen
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
