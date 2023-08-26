import React, {useState , useEffect, createContext } from "react";
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { Link,useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import login from '../context/login'
const NavSm = () => {
  const { loginWithRedirect,isAuthenticated,logout,isLoading,user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "Menu",
      link: "/menu"
    },
    {
      id: 3,
      name: "Deal",
      link: "/deal"
    },
    {
      id: 4,
      name: "Sign up",
      link: "/signUp"
    },
    {
      id: 5,
      name: "cart",
      link: "/cart"
    }

  ]
  
  return (
    <>
      <div className="text-red-600 flex justify-between relative">
        <div className="w-12 h-8">
          <BiMenu onClick={() => setIsOpen((prev) => !prev)} >
            {!isOpen ? (
              "" ) : (
                "x"
            )}
          </BiMenu>
          {isOpen && 
            <div className="w-full font-bold bg-white absolute gap-4 m-0 h-full">
              {list.map((menuItem, i) => 
                <div className="bg-white w-full font-bold py-3 flex place-content-center">
                  <Link to={menuItem.link} className=""><h3>{menuItem.name}</h3></Link>
                  
                </div>
              )}
            </div>
          }
        </div>
        <Link to='/' className="">
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" className="w-full h-full" />

        </Link>
        <div className="w-16 h-6">
          <button onClick={() => loginWithRedirect()} className="font-bold w-full h-full">Sign in</button>
          
        </div>
      </div>
    </>
  );
}

const NavMd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "Menu",
      link: "/menu"
    },
    {
      id: 3,
      name: "Deal",
      link: "/deal"
    },
    {
      id: 4,
      name: "Sign up",
      link: "/signUp"
    },
    {
      id: 5,
      name: "cart",
      link: "/cart"
    }

  ]
  
  const { loginWithRedirect,isAuthenticated,logout,isLoading,user } = useAuth0();
  return (
    <div className="container text-red-600 flex item-center relative justify-around">
        <div className="w-15 h-8">
        <BiMenu onClick={() => setIsOpen((prev) => !prev)} ></BiMenu>
        {isOpen && 
            <div className="w-full font-bold bg-white absolute gap-4 h-full place-content-center">
              {list.map((menuItem, i) => 
                <div className="w-full h-full bg-white font-bold py-3">
                  <Link to={menuItem.link} className=""><h3>{menuItem.name}</h3></Link>
                  
                </div>
              )}
            </div>
          } 

        </div>

        <div className="w-20 h-10">
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" className="w-full h-full" />

        </div>
        <div className="w-15 h-8">
        {isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{user.name}</button>
          
          )
          :(
            <button onClick={() => loginWithRedirect()} className="text-red-700 font-bold">Sign in</button>
          )}
        </div>
    </div>
);
}

const NavLg = () => {
  const { loginWithRedirect,isAuthenticated,logout,isLoading,user } = useAuth0();
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
  }, [location]);

  return(
    <div className="container p-3 flex item-center justify-between ml-8">
      <div className="flex item-center w-full ">
        <Link to="/" className="h-15 w-20">
          <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" 
          alt="logo"
          className="h-full w-full" />
        </Link>
          <div className="w-full flex item-center bg-white gap-3 px-3 py-4 rounded-sm">
          <Link  to="/menu" className={`px-5 font-bold ${location.pathname=== "/menu" ? "text-red-600 " : "" } `} >Menu</Link>
          <Link to="/deal" className={`px-5 font-bold ${location.pathname=== "/deal" ? "text-red-600 " : "" }`} >Deals</Link>
        </div>
      </div>

      <div className="flex item-center justify-end w-1/5 px-2">
        {isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{user.name}</button>
          
          )
          :(
            <button onClick={() => loginWithRedirect()} className="text-red-700 font-bold">Sign in</button>
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
    <nav className="bg-white ">
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

