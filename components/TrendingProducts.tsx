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
import { useRouter } from "next/router";

const TrendingProducts = () => {
  const Trending = Data.filter((item) => {
    return item.category?.includes("Trending");
  });

  const router = useRouter();

  const takeToProductDetail = () => {
    router.push(`/products`);
  };

  return (
    <section className=" max-w-6xl mx-auto py-3 mt-40 sm:mt-28 ">
      <h1 className="mainHeading">Trending Products</h1>
      <Grid justifyContent="center" container rowSpacing={4} columnSpacing={3}>
        {Trending.map((item) => (
          <Grid key={item.id} item sm={6} md={3}>
            <Paper
              className=" flex justify-center items-center space-y-2 text-[#151875] pb-8 p-4"
              sx={{}}
            >
              <TrendingPCard {...item} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Making a flex container where we show our 2nd list of this section */}

      <div className="w-full flex sm:flex-row items-center my-3 justify-between  flex-col ">
        {/*/////////////// 1st flex container ///////////////////  */}

        <div
          onClick={takeToProductDetail}
          className=" cursor-pointer p-7 w-[350px] lg:w-[420px] h-[270px] bg-[#FFF6FB] hover:shadow-lg my-6 "
        >
          <div className=" -mb-10 mt-1">
            <h1 className="sm:text-2xl text-[#151875] whitespace-nowrap">
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
              width={213}
              height={207}
            />
          </div>
        </div>

        {/* /////////////////////// @2nd flex container \\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

        <div
          onClick={takeToProductDetail}
          className=" cursor-pointer p-7 w-[350px] lg:w-[420px] h-[270px] group bg-[#eeeffb] my-6   md:overflow-hidden hover:shadow-md"
        >
          <div className="  mt-1">
            <h1 className="sm:text-2xl text-[#151875] whitespace-nowrap">
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
              width={312}
              height={173}
            />
          </div>
        </div>

        {/*//////////////////// @3rd flex container  //////////////////*/}

        <div className=" md:flex hidden w-[200px] lg:w-[267px] flex-col justify-between h-[270px]">
          <div
            onClick={takeToProductDetail}
            className="text-[#151875] hover:shadow-lg cursor-pointer text-xs flex justify-center items-center space-x-3 w-[267px] h-[74px] "
          >
            <div className="bg-[#f7f8f7] flex items-center justify-center w-[107px] h-[74px]  ">
              <Image
                className="bg-[#f7f8f7] "
                src={chairPic1}
                alt="product image"
                width={64}
                height={71}
              />
            </div>
            <div className="w-[151px] h-[33px]">
              <h3 className="text-sm whitespace-nowrap">
                Exclusive Seat chair
              </h3>
              <p>$35.00</p>
            </div>
          </div>

          {/* /////////////// Item #2 ////////////////////// */}

          <div
            onClick={takeToProductDetail}
            className="text-[#151875] hover:shadow-lg cursor-pointer text-xs flex justify-center items-center space-x-3 w-[267px] h-[74px] "
          >
            <div className="bg-[#f7f8f7] flex items-center justify-center w-[107px] h-[74px]  ">
              <Image
                className="bg-[#f7f8f7]"
                src={chairPic2}
                alt="product image"
                width={64}
                height={71}
              />
            </div>
            <div className="w-[151px] h-[33px]">
              <h3 className="text-sm whitespace-nowrap">
                Exclusive Seat chair
              </h3>
              <p>$35.00</p>
            </div>
          </div>

          {/* /////////////// Item #3 ////////////////////// */}

          <div
            onClick={takeToProductDetail}
            className="text-[#151875] hover:shadow-lg cursor-pointer text-xs flex justify-center items-center space-x-3 w-[267px] h-[74px] "
          >
            <div className="bg-[#f7f8f7] flex items-center justify-center w-[107px] h-[74px]  ">
              <Image
                src={chairPic3}
                alt="product image"
                width={64}
                height={71}
              />
            </div>
            <div className="w-[151px] h-[33px]">
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
