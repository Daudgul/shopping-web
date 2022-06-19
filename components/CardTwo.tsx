import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";

const CardTwo: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="group cursor-pointer ">
      <div className="relative flex bg-[#f7f8f7] group-hover:bg-inherit  ">
        <div className="flex flex-col justify-end space-y-3 ml-3 mb-3 text-[#151875] opacity-0 group-hover:opacity-100">
          <AddShoppingCartOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <SavedSearchIcon />
        </div>
        <Image
          src={image}
          alt="product"
          width={280}
          height={350}
          className="scale-90   "
        />
        <div className=" absolute top-52 left-32 w-10 h-10 rotate-45 skew-x-12 -skew-y-12 blur-xl translate-x-4 bg-black opacity-50 -z-10 md:top-60 md:left-40 "></div>
      </div>
      <div className="flex mt-3 justify-between  text-[#151875] mb-5">
        <h3>Comfort Handy Craft</h3>
        <h3>
          $42:00{" "}
          <span className=" text-xs text-[#FB2E86] line-through">$65:00</span>
        </h3>
      </div>
    </div>
  );
};

export default CardTwo;
