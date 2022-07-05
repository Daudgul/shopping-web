import React, { ReactNode } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Badge, Button, Tooltip } from "@mui/material";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Link from "next/link";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  const { cartQuantity, favoriteItems } = useShoppingCart();
  const { user, logout } = useAuth();
  const id = user?.email || "";
  const length = id.indexOf("@");
  const userName = id.slice(0, length);

  const router = useRouter();

  const takeToHome = () => {
    router.push("/");
  };

  return (
    <>
      <header>
        <div className="w-full py-[2px] bg-[#7e33e0] ">
          <div className=" flex text-[#fff] justify-between items-center max-w-6xl mx-auto  py-2">
            <div className=" space-x-10 items-center hidden sm:flex ">
              <h3>
                <span>
                  <EmailOutlinedIcon />{" "}
                </span>
                {user === null ? "Please Log In your account" : user.email}
              </h3>
              <h3>
                <PermIdentityOutlinedIcon />{" "}
                <span className=" ">
                  {userName ? `Hello ${userName}` : "Welcome Back"}
                </span>
              </h3>
            </div>
            {}
            <div className="flex space-x-5 items-center mx-auto sm:mx-0 ">
              {user === null ? (
                <Link href="/login">
                  <div className=" cursor-pointer">
                    Login
                    <span>
                      <PermIdentityOutlinedIcon />
                    </span>
                  </div>
                </Link>
              ) : (
                <Tooltip title="Logout this page now?">
                  <button onClick={logout}>
                    Log out{" "}
                    <span>
                      <PersonOffOutlinedIcon />
                    </span>{" "}
                  </button>
                </Tooltip>
              )}

              <Link href="/whishlist">
                <div className=" cursor-pointer">
                  Whishlist{"  "}
                  <span>
                    <FavoriteBorderOutlinedIcon
                      className={`${
                        favoriteItems.length > 0 && "text-green-500"
                      }`}
                    />
                  </span>
                </div>
              </Link>
              <Link href="/baskit">
                <div className=" cursor-pointer">
                  <Badge badgeContent={cartQuantity} color="secondary">
                    <AddShoppingCartOutlinedIcon />
                  </Badge>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" py-2 flex justify-between items-center max-w-6xl mx-auto  flex-col sm:flex-row my-3 ">
          <div className="flex space-x-10 flex-col sm:flex-row  ">
            <h1 onClick={takeToHome} className="font-semibold text-3xl mx-auto">
              Hekto
            </h1>
            <ul className="  flex justify-between items-center text-sm sm:text-base space-x-2 sm:space-x-5 font-semibold   ">
              <Link href="/">
                <a
                  className={`childItem ${
                    router.pathname === "/" && " text-pink-600"
                  }`}
                >
                  Home
                </a>
              </Link>

              <Link href="/products">
                <a
                  className={`childItem ${
                    router.pathname.includes("/product") && " text-pink-600"
                  }`}
                >
                  Products
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={`childItem ${
                    router.pathname.includes("/about") && " text-pink-600"
                  }`}
                >
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={`childItem ${
                    router.pathname.includes("/contact") && " text-pink-600"
                  }`}
                >
                  Content
                </a>
              </Link>
            </ul>
          </div>

          <form className="group relative flex">
            <input
              className="focus:ring-2 group-focus:ring-[#FB2E86] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400  py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Filter projects"
              placeholder="Search projects..."
            />
            <button className=" bg-[#FB2E86] w-16 text-white border border-[#FB2E86] scale-105">
              <SearchIcon />
            </button>
          </form>
        </div>
      </header>
      {children}
      <div>
        <div className="w-full  bg-[#EEEFFB]">
          <div className="max-w-6xl hidden sm:flex justify-between items-center text-[#8A8FB9] text-sm mx-auto h-[479px] flex-wrap">
            <div>
              <h1 className="text-4xl md:-mt-8 mb-10 text-black">Hekto</h1>
              <input
                type="text"
                className=" pl-5 w-[377px] h-[44px] mb-6"
                placeholder="Enter Email address"
              />
              <Button
                className=" -translate-x-[135px] w-[135px] h-[40px] -translate-y-[1px]"
                variant="contained"
                disableElevation
              >
                Singn up
              </Button>
              <p>Contact info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
              <h1 className="text-xl text-black mb-8">Categories</h1>
              <ul className="space-y-4 cursor-pointer">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl mb-8 text-black">Customer Care</h1>
              <ul className="space-y-4 cursor-pointer">
                <li>My Account</li>
                <li>Discout</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl mb-8 text-black">Page</h1>
              <ul className="space-y-4 cursor-pointer">
                <li>Blog</li>
                <li>Browse The Shoup</li>
                <li>Category</li>
                <li>Pre-Bulit-Pages</li>
                <li>Visual Composer Elements</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex ite justify-center py-3 bg-[#7e33e0] text-white">
          <h1> - All Ⓒ Rights are Reserved</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
