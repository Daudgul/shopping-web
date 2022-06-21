import React, { useRef } from "react";
import CardFour from "./CardFour";
import PicFour from "../img/pic-4.webp";
import { Data } from "./data";

// interface Props {
//   image: Data[];
// }

const SectionEight = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  return (
    <section className="max-w-6xl mx-auto py-3">
      <div className="flex items-center justify-center flex-col space-y-10">
        <h1 className=" text-4xl text-[#414e9b] ">Top Category</h1>
        <div className=" flex items-center justify-center ">
          <div
            ref={rowRef}
            className=" max-w-6xl flex items-center space-x-8  overflow-x-scroll scrollbar-hide p-4 "
          >
            {Data.map((card: any) => (
              <CardFour key={card.id} image={card.img} />
            ))}
          </div>
        </div>
        <div>
          <span className="spanDot"></span>
          <span className="spanDot"></span>
          <span className="spanDot"></span>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
