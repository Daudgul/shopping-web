import React, { ReactNode } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Badge, Tooltip } from "@mui/material";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Link from "next/link";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  const { cartQuantity } = useShoppingCart();
  const { user, logout } = useAuth();
  const id = user?.email || "";
  const length = id.indexOf("@");
  const userName = id.slice(0, length);
  const router = useRouter();

  return (
    <>
      <header>
        <div className="w-full bg-[#7e33e0] ">
          <div className=" flex text-[#fff] justify-between items-center max-w-6xl mx-auto  py-2">
            <div className=" space-x-10 items-center hidden sm:flex ">
              <h3>
                <span>
                  <EmailOutlinedIcon />{" "}
                </span>
                {user === null ? "Please Log In to your account" : user.email}
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
        <div className=" flex justify-between items-center max-w-6xl mx-auto  flex-col sm:flex-row my-3 ">
          <div className="flex space-x-10 flex-col sm:flex-row  ">
            <h1 className="font-semibold text-3xl mx-auto">Hekto</h1>
            <ul className="  flex justify-between items-center space-x-5 font-semibold   ">
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
      <div className="flex ite justify-center py-3 bg-[#7e33e0] text-white">
        <h1> - All CopyⒸ Rights are Reserved</h1>
      </div>
    </>
  );
};

export default Header;
