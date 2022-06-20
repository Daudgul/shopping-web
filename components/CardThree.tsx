import Image from "next/image";
import React from "react";

const CardThree: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="group cursor-pointer ">
      <div className=" flex bg-[#f7f8f7]   ">
        <Image src={image} alt="product" width={220} height={250} />
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

export default CardThree;
