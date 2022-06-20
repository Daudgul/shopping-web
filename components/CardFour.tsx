import Image from "next/image";
import React from "react";

const CardFour: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="group">
      <div className=" bg-purple-500 rounded-full">
        <div className=" flex items-center justify-center rounded-full flex-col text-white text-xs w-56 h-56 bg-[#f6f7fb] shadow  hover:-translate-y-2 hover:translate-x-1 duration-300 ">
          <Image src={image} alt="product" width={120} height={150} />
          <button className="w-auto  h-auto px-3 py-2 rounded -mt-3 bg-green-400 group-hover:mt-0 group-hover:opacity-100 opacity-0 duration-200">
            View Shop
          </button>
        </div>
      </div>
      <div className=" mt-3 flex flex-col items-center  text-[#151875] ">
        <h3>Comfort Handy Craft</h3>
        <h3>
          $42:00{" "}
          <span className=" text-xs text-[#ada9ab] line-through">$65:00</span>
        </h3>
      </div>
    </div>
  );
};

export default CardFour;
