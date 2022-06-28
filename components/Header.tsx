import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Badge, Button, SelectChangeEvent, Tooltip } from "@mui/material";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Link from "next/link";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { cartQuantity } = useShoppingCart();
  const { user, logout } = useAuth();
  const id = user?.email || "";
  const length = id.indexOf("@");
  const userName = id.slice(0, length);

  return (
    <header>
      <div className="w-full bg-[#7e33e0] ">
        <div className=" flex text-[#fff] h-12 justify-between items-center max-w-6xl mx-auto ">
          <div className="flex space-x-10 items-center ">
            <h3>
              <span>
                <EmailOutlinedIcon />{" "}
              </span>
              {user === null ? "Please Log In to your account" : user.email}
            </h3>
            <h3>
              <span>
                <PermIdentityOutlinedIcon />{" "}
                {userName ? `Hello ${userName}` : "Welcome Back"}
              </span>
            </h3>
          </div>
          {}
          <div className="flex space-x-5 items-center">
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
                  <FavoriteBorderOutlinedIcon />
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
      <div className=" flex justify-between items-center max-w-6xl mx-auto  flex-col sm:flex-row h-16 ">
        <div className="flex space-x-10  ">
          <h1 className="font-semibold text-3xl">Hekto</h1>
          <ul className=" childItem flex justify-between items-center space-x-5 font-semibold  ">
            <Link href="/">
              <span className="childItem cursor-pointer transition  hover:text-[#FB2E86]  active:text-red-600 visited:text-yellow-200">
                Home
              </span>
            </Link>

            <Link href="/products">
              <span className="childItem cursor-pointer transition  hover:text-[#FB2E86]  active:text-red-600 visited:text-yellow-200">
                Products
              </span>
            </Link>
            <Link href="/about">
              <span className="childItem cursor-pointer transition  hover:text-[#FB2E86]  active:text-red-600 visited:text-yellow-200">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="childItem cursor-pointer transition  hover:text-[#FB2E86]  active:text-red-600 visited:text-yellow-200">
                Content
              </span>
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
  );
};

export default Header;
