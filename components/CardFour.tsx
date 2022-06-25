import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  oldPrise: number;
  rating: number;
  details: string;
};

const CardFour = ({ id, title, oldPrise, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="group">
      <div className=" bg-purple-500 rounded-full">
        <div className=" flex items-center justify-center rounded-full flex-col text-white text-xs w-56 h-56 bg-[#f6f7fb] shadow  hover:-translate-y-2 hover:translate-x-1 duration-300 ">
          <Image
            src={imgUrl}
            alt="product"
            width={120}
            height={150}
            className="w-[120px] h-[150px]"
          />
          <Button
            href="/products"
            className="w-auto  h-auto px-3 py-2 rounded -mt-3 bg-green-400 group-hover:mt-0 group-hover:opacity-100 opacity-0 duration-200 capitalize"
          >
            View Shop
          </Button>
        </div>
      </div>
      <div className=" mt-3 flex flex-col items-center  text-[#151875] ">
        <h3>{title}</h3>
        <h3>
          ${price}:00{" "}
          <span className=" text-xs text-[#ada9ab] line-through">
            ${oldPrise}:00
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CardFour;
