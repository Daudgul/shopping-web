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

const TopCard = ({ id, title, oldPrise, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="group w-full h-full">
      <div className=" bg-purple-500 rounded-full w-[261px] h-[269px] lg:w-[200px] lg:h-[205px] xl:w-[261px] xl:h-[269px]  ">
        <div className="  flex items-center justify-center rounded-full flex-col text-white text-xs w-[261px] h-[269px] lg:w-[200px] lg:h-[205px] xl:w-[261px] xl:h-[269px] bg-[#f6f7fb] shadow-lg  hover:-translate-y-2 hover:translate-x-1 duration-300 ">
          <Image
            objectFit="contain"
            src={imgUrl}
            alt="product"
            width={178}
            height={178}
          />
          <Button
            disableElevation
            variant="contained"
            href="/products"
            color="secondary"
            sx={{
              textTransform: "capitalize",
            }}
            className="w-auto  h-auto px-3 py-2 rounded -mt-3 bg-green-400 group-hover:mt-0 group-hover:opacity-100 opacity-0 duration-200 capitalize"
          >
            View Shop
          </Button>
        </div>
      </div>
      <div className=" mt-6 flex flex-col items-center  text-[#151875] ">
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

export default TopCard;
