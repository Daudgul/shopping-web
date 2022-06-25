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
import Data from "../data/allData.json";

const SectionTwo = () => {
  const featuredProducts = Data.filter((item) => {
    return item.category?.includes("FeaturedProducts");
  });
  return (
    <section className=" max-w-6xl mx-auto py-3 mt-10 ">
      <h1 className="mainHeading">Featured Products</h1>
      <div className="flex justify-around md:justify-between flex-wrap">
        {featuredProducts.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
