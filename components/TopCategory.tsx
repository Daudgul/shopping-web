import React from "react";
import TopCard from "./TopCard";
import Data from "../data/allData.json";

const TopCategory = () => {
  const TopCategory = Data.filter((item) => {
    return item.category?.includes("TopCategory");
  });
  return (
    <section className="max-w-6xl mx-auto py-3">
      <div className="flex items-center justify-center flex-col space-y-10">
        <h1 className=" text-4xl text-[#414e9b] ">Top Category</h1>
        <div className=" flex items-center justify-center">
          <div className="flex flex-col md:flex-row md:space-x-7">
            {TopCategory.map((item) => (
              <TopCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategory;
