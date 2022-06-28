import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import TrendingPCard from "./TrendingPCard";
import trendingPOne from "../img/trendingPOne.webp";
import trendingPTwo from "../img/trendingPTwo.webp";
import Image from "next/image";
import chairPic1 from "../img/exclusiveChair1.webp";
import chairPic2 from "../img/exclusiveChair2.webp";
import chairPic3 from "../img/exclusiveChair3.webp";
import Data from "../data/allData.json";

const TrendingProducts = () => {
  const Trending = Data.filter((item) => {
    return item.category?.includes("Trending");
  });
  return (
    <section className=" max-w-6xl mx-auto py-3 my-12 ">
      <h1 className="mainHeading">Trending Products</h1>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {Trending.map((item) => (
          <Grid key={item.id} item sm={6} md={3}>
            <Paper
              className="space-y-2 text-[#151875] pb-8 p-4"
              sx={{
                width: "1/4",
                height: "350px",
              }}
            >
              <TrendingPCard {...item} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Making a flex container where we show our 2nd list of this section */}

      <div className="w-full flex h-80 my-10 sm:flex-wrap space-x-5">
        {/*/////////////// 1st flex container ///////////////////  */}

        <div className=" flex-1 p-7 w-full bg-[#eeeffb] shadow my-6 ">
          <div className=" -mb-10 mt-1">
            <h1 className="text-2xl text-[#151875] whitespace-nowrap">
              23% off in all products
            </h1>
            <Button
              disableElevation
              href="/products"
              sx={{
                textTransform: "capitalize",
                textDecorationLine: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Shop Now
            </Button>
          </div>
          <div className=" flex w-full justify-end ml-6 -m-6">
            <Image
              src={trendingPOne}
              alt="product image"
              width={220}
              height={220}
            />
          </div>
        </div>

        {/* /////////////////////// @2nd flex container //////////////*/}

        <div className=" flex-1 p-7 w-full bg-[#eeeffb] shadow my-6   md:overflow-hidden">
          <div className="  mt-1">
            <h1 className="text-2xl text-[#151875] whitespace-nowrap">
              23% off in all products
            </h1>
            <Button
              disableElevation
              href="/products"
              sx={{
                textTransform: "capitalize",
                textDecorationLine: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Shop Now
            </Button>
          </div>
          <div className=" flex w-full justify-end ml-2 -mb-12">
            <Image
              src={trendingPTwo}
              alt="product image"
              width={290}
              height={220}
            />
          </div>
        </div>

        {/*//////////////////// @3rd flex container  //////////////////*/}

        <div className=" sm:flex hidden w-72 flex-col justify-center items-start space-y-3">
          <div className="text-[#151875] text-xs flex justify-center items-center space-x-3 ">
            <Image
              className="bg-[#f7f8f7] "
              src={chairPic1}
              alt="product image"
              width={90}
              height={90}
            />
            <div className="">
              <h3 className="text-sm whitespace-nowrap">
                Exclusive Seat chair
              </h3>
              <p>$35.00</p>
            </div>
          </div>

          {/* /////////////// Item #2 ////////////////////// */}

          <div className="text-[#151875] text-xs flex justify-center items-center space-x-3 ">
            <Image
              className="bg-[#f7f8f7]"
              src={chairPic2}
              alt="product image"
              width={90}
              height={90}
            />
            <div className="">
              <h3 className="text-sm whitespace-nowrap">
                Exclusive Seat chair
              </h3>
              <p>$35.00</p>
            </div>
          </div>

          {/* /////////////// Item #3 ////////////////////// */}

          <div className="text-[#151875] text-xs flex justify-center items-center space-x-3 ">
            <Image
              className="bg-[#f7f8f7]"
              src={chairPic3}
              alt="product image"
              width={90}
              height={90}
            />
            <div className="">
              <h3 className="text-sm whitespace-nowrap">
                Exclusive Seat chair
              </h3>
              <p>$35.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
