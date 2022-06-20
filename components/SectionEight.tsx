import React from "react";
import CardFour from "./CardFour";
import PicFour from "../img/pic-4.webp";

const SectionEight = () => {
  return (
    <section className="max-w-6xl mx-auto py-3">
      <div className="flex items-center justify-center flex-col space-y-10">
        <h1 className=" text-4xl text-[#414e9b] ">Top Category</h1>
        <div className="relative flex items-center justify-center w-full h-80 ">
          <div className="absolute flex md:flex-row md:space-x-7">
            <CardFour image={PicFour.src} />
            <CardFour image={PicFour.src} />
            <CardFour image={PicFour.src} />
            <CardFour image={PicFour.src} />
          </div>
          <div className=" absolute flex  md:flex-row md:space-x-7">
            <CardFour image={PicFour.src} />
            <CardFour image={PicFour.src} />
            <CardFour image={PicFour.src} />
            <CardFour image={PicFour.src} />
          </div>
        </div>
        <div>
          <span className="spanDot"></span>
          <span className="spanDot"></span>
          <span className="spanDot"></span>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
