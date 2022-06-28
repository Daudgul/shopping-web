import React from "react";
import Data from "../data/allData.json";
import FeaturedCard from "./FeaturedCard";

const FeaturedProducts = () => {
  const featuredProducts = Data.filter((item) => {
    return item.category?.includes("FeaturedProducts");
  });
  return (
    <section className=" max-w-6xl mx-auto py-3 mt-10 ">
      <h1 className="mainHeading">Featured Products</h1>
      <div className="flex justify-around md:justify-between flex-wrap">
        {featuredProducts.map((item) => (
          <FeaturedCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
