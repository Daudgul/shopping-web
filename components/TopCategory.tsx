import React from "react";
import TopCard from "./TopCard";
import Data from "../data/allData.json";

const TopCategory = () => {
  const TopCategory = Data.filter((item) => {
    return item.category?.includes("TopCategory");
  });
  return (
    <section className="max-w-6xl mx-auto mb-24 mt-60 sm:mt-0 ">
      <div className="flex items-center justify-center flex-col space-y-10">
        <h1 className=" text-4xl text-[#414e9b] pb-3 ">Top Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {TopCategory.map((item) => (
            <TopCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategory;
