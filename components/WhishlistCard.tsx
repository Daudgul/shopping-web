import Image from "next/image";
import React from "react";
import Product from "../img/img-2.png";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Rating } from "@mui/material";

const WhishlistCard = () => {
  return (
    <div className="max-w-5xl my-5">
      <div className="flex space-x-5 text-sm ">
        <Image src={Product} width={300} height={250} alt="product img" />
        <div className="text-[#151875] space-y-2 justify-center flex flex-col">
          <h4 className="text-xl">Accumsan tincidunt</h4>
          <div className="flex space-x-3">
            <h6>$96.00</h6>
            <h6 className="text-[#FB3E86] line-through">$104.00</h6>
            <Rating className="text-sm" name="read-only" value={4} readOnly />
          </div>
          <p className=" text-[#2f1ac4]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            officia nesciunt inventore! Ratione provident labore adipisci cum
            repudiandae magni tempora?
          </p>
          <div className="flex items-center pt-2 text-[#151875] space-x-8">
            <AddShoppingCartOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <SavedSearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhishlistCard;
