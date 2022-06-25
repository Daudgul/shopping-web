import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import storeItems from "../data/allData.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  oldPrise: number;
  rating: number;
  details: string;
};

const ProductsCard = ({
  id,
  title,
  oldPrise,
  price,
  imgUrl,
}: StoreItemProps) => {
  const router = useRouter();
  let searchedItem = router.query.details;

  const takeToProductDetail = (id: number) => {
    router.push(`products/${id}`);
  };

  ////////////////////////////////////////
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="group cursor-pointer my-2 ">
      <div className=" flex bg-[#f7f8f7] group-hover:bg-inherit  ">
        <div className="flex flex-col justify-end space-y-3 ml-3 mb-3 text-[#151875] opacity-0 group-hover:opacity-100">
          <IconButton size="small">
            <AddShoppingCartOutlinedIcon
              onClick={() => increaseCartQuantity(id)}
            />
          </IconButton>

          <IconButton size="small">
            <SavedSearchIcon onClick={() => takeToProductDetail(id)} />
          </IconButton>
          <IconButton size="small">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </div>
        <img
          src={imgUrl}
          alt="product"
          width={210}
          height={260}
          className="scale-90 w-[210px] h-[260px]    "
        />
      </div>
      <div className="flex mt-3 justify-between items-center flex-col  text-[#151875] mb-5 space-y-1">
        <h3>{title}</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-pink-500 "></div>
          <div className="w-3 h-3 rounded-full bg-orange-300 "></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 "></div>
        </div>
        <h3>
          ${price}
          <span className=" text-xs text-[#FB2E86] line-through">
            ${oldPrise}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ProductsCard;
function id(id: any): void {
  throw new Error("Function not implemented.");
}
