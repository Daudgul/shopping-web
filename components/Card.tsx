import Image from "next/image";
import React from "react";
import productOne from "../img/img-3.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Card: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div>
      <div className="flex rounded flex-col w-60 my-8 cursor-pointer group shadow-2xl   ">
        <div className="flex flex-col bg-[#f6f7fb]">
          <div className=" text-sky-400 space-x-4  translate-y-0.5 scale-75 opacity-0 group-hover:opacity-100   -mb-4 ">
            <AddShoppingCartOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <SearchIcon />
          </div>
          <Image
            src={image}
            alt="product"
            width={180}
            height={250}
            className="scale-90 group-hover:scale-75 transition duration-500 "
          />
          <button className=" -mt-6 opacity-0 group-hover:opacity-100 text-xs p-2 w-22 rounded bg-[#09d15d] mx-auto text-white">
            View Detail
          </button>
        </div>
        <div className="  w-60 flex flex-col justify-center text-[#151875] items-center space-y-1 group-hover:text-white group-hover:bg-[#2f1ac4] mt-1 transition duration-200">
          <h2 className=" text-xl text-[#FB2E86] group-hover:text-white mt-1 ">
            Cantilever chair
          </h2>
          <div>
            <span className=" bg-slate-600"></span>
            <span>{""}</span>
            <span>{""}</span>
          </div>
          <p>Code - Y523201</p>
          <p className="pb-2">$42.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
