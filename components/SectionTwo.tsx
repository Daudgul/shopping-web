import Image from "next/image";
import React from "react";
import productOne from "../img/img-3.png";
import productTwo from "../img/img-2.png";
import productThree from "../img/img-4.png";
import Card from "./Card";
import PicOne from "../img/pic-1.webp";
import PicTwo from "../img/pic-2.webp";
import PicThree from "../img/pic-3.webp";
import PicFour from "../img/pic-4.webp";

const SectionTwo = () => {
  return (
    <section className=" max-w-6xl mx-auto py-3 mt-10 ">
      <h1 className="mainHeading">Featured Products</h1>
      <div className="flex justify-between flex-wrap">
        <Card image={PicOne.src} />
        <Card image={PicTwo.src} />
        <Card image={PicThree.src} />
        <Card image={PicFour.src} />
      </div>
    </section>
  );
};

export default SectionTwo;
