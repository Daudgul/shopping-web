import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Data from "../data/allData.json";

const UniqueFeatures = () => {
  const { increaseCartQuantity } = useShoppingCart();

  const Unique = Data.filter((item) => {
    return item.category?.includes("Unique");
  });
  return (
    <section className="w-full max-h-[570px]  bg-[#f2f0ff] lg:mt-20 ">
      <div className="max-w-6xl mx-auto py-3 my-12">
        <Container>
          <Grid alignItems="center" container>
            <Grid item sm={6}>
              <div className="relative justify-center flex items-center">
                <div
                  className="w-4/5 h-4/5 z-10 bg-[#eeddfb] absolute "
                  style={{ borderRadius: "55% 45% 45% 55% / 66% 64% 36% 34%" }}
                >
                  {""}
                </div>
                {Unique.map((item) => (
                  <Image
                    key={item.id}
                    src={item.imgUrl}
                    width={558}
                    height={550}
                    className="z-50"
                  />
                ))}
              </div>
            </Grid>
            <Grid className="mainContent  " item sm={6}>
              <h3 className=" md:text-4xl font-semibold">
                Unique Features Of latest & Trending Product
              </h3>

              <ul className=" text-xs list-disc">
                <li className="text-[#FB2E86] font-extrabold md:text-3xl">
                  <span className="text-[#151875] sm:text-sm">
                    Arms ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, maiores?
                  </span>
                </li>
                <li className=" font-extrabold md:text-3xl">
                  <span className="text-[#151875] sm:text-sm">
                    All ipsum dolor, sit amet consectetur adipisicing elit. Qui
                    sint in tenetur eaque repellendus ab dolorem velit voluptas
                    nulla laborum!
                  </span>
                </li>
                <li className="text-[#09d15d] font-extrabold md:text-3xl">
                  <span className="text-[#151875] sm:text-sm">
                    Rainforced, ipsum dolor sit amet consectetur adipisicing
                    elit.
                  </span>
                </li>
              </ul>
              <div className="flex space-x-6">
                <button
                  onClick={() =>
                    Unique.map((item) => increaseCartQuantity(item.id))
                  }
                  className="btn btn--primary"
                >
                  Add To Cart
                </button>
                <div>
                  <h1>B&B Italian Safe</h1>
                  <span>$32,00</span>{" "}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};
export default UniqueFeatures;
