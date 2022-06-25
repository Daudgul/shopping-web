import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  oldPrise: number;
  rating: number;
  details: string;
};

const CardTwo = ({ id, title, oldPrise, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="group cursor-pointer ">
      <div className=" flex bg-[#f7f8f7] group-hover:bg-inherit  ">
        <div className="flex flex-col justify-end space-y-3 ml-3 mb-3 text-[#151875] opacity-0 group-hover:opacity-100">
          <AddShoppingCartOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <SavedSearchIcon />
        </div>
        <img
          src={imgUrl}
          alt="product"
          width={280}
          height={350}
          className="scale-90  w-[280px] h-[350px]  "
        />
      </div>
      <div className="flex mt-3 justify-between  text-[#151875] mb-5">
        <h3>{title}</h3>
        <h3>
          ${price}{" "}
          <span className=" text-xs text-[#FB2E86] line-through">
            ${oldPrise}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CardTwo;
