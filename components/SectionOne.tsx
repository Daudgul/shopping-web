import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import productPic from "../img/promotionChair.png";

const SectionOne = () => {
  return (
    <section className="flex w-full bg-[#f2f0ff] ">
      <div className="  max-h-[764px] flex justify-between flex-col sm:flex-row items-center max-w-6xl lg:max-w-[1300px] mx-auto py-3 p-5 sm:p-0 overflow-visible">
        <div className=" lg:ml-8 mg:w-[644px] max-h-[348px] ">
          <h2 className="text-[#FB2E86] font-semibold  ">
            Best Furniture For Your Castle...
          </h2>
          <h1 className=" text-2xl md:text-6xl my-2 max-w-[614px]">
            New Furniture Collection Trends in 2022
          </h1>

          <p className="text-[#414e9b] text-xs sm:text-base my-4 lg:mb-20 max-w-[559px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio recusandae sequi sunt unde, dolorum, nobispit !
          </p>
          <Button
            disableElevation
            variant="contained"
            href="/products"
            sx={{
              textTransform: "capitalize",
              px: "38px",
              py: "8px",
              fontSize: { lg: "20px" },
            }}
          >
            Shop Now
          </Button>
        </div>

        {/* ////////////////////////   Part two   ///////////////////////////////// */}

        <div className="relative lg:w-[706px] lg:h-[689px] hidden sm:block my-8 ">
          <Image src={productPic} layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
