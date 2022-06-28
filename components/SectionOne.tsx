import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import productPic from "../img/img-1.png";

const SectionOne = () => {
  return (
    <section className="flex w-full bg-[#f2f0ff] ">
      <div
        className=" flex justify-between items-center max-w-6xl mx-auto py-3"
        style={{ maxHeight: "500px" }}
      >
        <div className=" space-y-3 ">
          <h2 className="text-[#FB2E86] font-semibold ">
            Best Furniture For Your Castle...
          </h2>
          <h1 className=" text-4xl md:text-6xl">
            New Funrniture Collection Trends in 2020
          </h1>

          <p className="text-[#414e9b] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            distinctio recusandae sequi sunt unde, dolorum, nobispit !
          </p>
          <Button
            disableElevation
            variant="contained"
            href="/products"
            sx={{
              textTransform: "capitalize",
              px: "28px",
            }}
          >
            Shop Now
          </Button>
        </div>
        <div className="relative lg:h-full lg:w-full ">
          <div
            className="w-4/5 h-4/5  z-20 bg-[#eeddfb] absolute right-6 top-8 "
            style={{ borderRadius: "40% 60% 52% 48% / 44% 60% 40% 56% " }}
          >
            {""}
          </div>
          <div
            className="w-full h-full  z-10 bg-[#f0e5fd] absolute "
            style={{ borderRadius: "36% 64% 31% 69% / 56% 46% 54% 44%" }}
          >
            {""}
          </div>
          <div
            style={{ borderRadius: "26% 74% 53% 47% / 65% 48% 52% 35%" }}
            className="absolute right-0 top-0 bg-[#01c1fe] w-24 h-24 sm:right-10 text-[#fff] z-40 font-['Josefin_Sans'] flex items-center justify-center font-semibold text-lg flex-col  "
          >
            50% <span> 0ff</span>
          </div>
          <Image className=" z-30 " src={productPic} width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
