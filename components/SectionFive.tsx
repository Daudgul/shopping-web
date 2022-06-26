import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import productPic from "../img/img-1.png";
import Data from "../data/allData.json";

const SectionFive = () => {
  const Unique = Data.filter((item) => {
    return item.category?.includes("Unique");
  });
  return (
    <section className="w-full  bg-[#f2f0ff] ">
      <div className="max-w-6xl mx-auto py-3 my-12">
        <Grid container columnSpacing={4}>
          <Grid item sm={6}>
            <div className="relative justify-center flex items-center">
              <div
                className="w-4/5 h-full z-10 bg-[#eeddfb] absolute "
                style={{ borderRadius: "34% 88% 55% 63% / 58% 69% 67% 65%" }}
              >
                {""}
              </div>
              {Unique.map((item) => (
                <Image
                  className=" z-30 "
                  src={item.imgUrl}
                  width={350}
                  height={350}
                />
              ))}
            </div>
          </Grid>
          <Grid className="mainContent  " item sm={6}>
            <h3 className=" md:text-4xl font-semibold">
              Unique Features Of leatest & Trending Product
            </h3>

            <ul className=" text-sm list-disc">
              <li className="text-[#FB2E86] font-extrabold md:text-3xl">
                <span className="text-[#151875] text-sm">
                  Arms ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, maiores?
                </span>
              </li>
              <li className=" font-extrabold md:text-3xl">
                <span className="text-[#151875] text-sm">
                  All ipsum dolor, sit amet consectetur adipisicing elit. Qui
                  sint in tenetur eaque repellendus ab dolorem velit voluptas
                  nulla laborum!
                </span>
              </li>
              <li className="text-[#09d15d] font-extrabold md:text-3xl">
                <span className="text-[#151875] text-sm">
                  Rainforced, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
            </ul>
            <div className="flex space-x-6">
              <button className="btn btn--primary">Add To Cart</button>
              <div>
                <h1>B&B Italian Safe</h1>
                <span>$32,00</span>{" "}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default SectionFive;
