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

const CardThree = ({ id, title, oldPrise, price, imgUrl }: StoreItemProps) => {
  return (
    <div className="group cursor-pointer ">
      <div className=" flex bg-[#f7f8f7]   ">
        <img
          src={imgUrl}
          alt="product"
          width={220}
          height={250}
          className="w-[220px] h-[250px]"
        />
      </div>
      <div className=" mt-3 flex flex-col items-center  text-[#151875] ">
        <h3>{title}</h3>
        <h3>
          ${price}{" "}
          <span className=" text-xs text-[#ada9ab] line-through">
            ${oldPrise}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CardThree;
