import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import productPic from "../img/img-1.png";

const SectionFive = () => {
  return (
    <section className="w-full  bg-[#f2f0ff] ">
      <div className="max-w-6xl h-96 mx-auto py-3">
        <Grid container columnSpacing={4}>
          <Grid item sm={6}>
            <div className="relative justify-center flex items-center">
              <div
                className="w-4/5 h-4/5 z-10 bg-[#eeddfb] absolute "
                style={{ borderRadius: "36% 64% 31% 69% / 56% 46% 54% 44%" }}
              >
                {""}
              </div>

              <Image
                className=" z-30 "
                src={productPic}
                width={350}
                height={350}
              />
            </div>
          </Grid>
          <Grid item sm={6}>
            <h3>Unique Features Of leatest & Trending Product</h3>

            <ul>
              <li>
                Arms ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, maiores?
              </li>
              <li>
                All ipsum dolor, sit amet consectetur adipisicing elit. Qui sint
                in tenetur eaque repellendus ab dolorem velit voluptas nulla
                laborum!
              </li>
              <li>
                Rainforced, ipsum dolor sit amet consectetur adipisicing elit.
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
