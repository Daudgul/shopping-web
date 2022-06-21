import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";

const Header = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <header>
      <div className="w-full bg-[#7e33e0] ">
        <div className=" flex text-[#fff] h-12 justify-between items-center max-w-6xl mx-auto ">
          <div className="flex space-x-10 items-center ">
            <h3>
              <span>
                <EmailOutlinedIcon />
              </span>
              {"  "} daudgul@gmail.com
            </h3>
            <h3>
              <span>
                <WifiCalling3OutlinedIcon />
              </span>
              {"  "} +91-9012261447
            </h3>
          </div>

          <div className="flex space-x-5 items-center">
            {/* <FormControl
              className=" outline-none border-none"
              color={"secondary"}
              sx={{
                m: 1,
                minWidth: 120,
                border: "none",
                outline: "none ",
                clolor: "white",
              }}
              size="small"
            >
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                color={"secondary"}
                sx={{
                  m: 1,
                  minWidth: 120,
                  border: "none",
                  outline: "none ",
                  clolor: "white",
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
            <Link href="/login">
              <div className=" cursor-pointer">
                Login
                <span>
                  <PermIdentityOutlinedIcon />
                </span>
              </div>
            </Link>
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
                <AddShoppingCartOutlinedIcon />
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
            <li>Pages</li>
            <li>Produts</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Content</li>
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
