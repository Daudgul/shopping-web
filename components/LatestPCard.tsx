import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/allData.json";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  oldPrise: number;
  rating: number;
  details: string;
};

const LatestPCard = ({
  id,
  title,
  oldPrise,
  price,
  imgUrl,
}: StoreItemProps) => {
  const { increaseCartQuantity, addFavoritreItem } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  const router = useRouter();

  const takeToProductDetail = (id: number) => {
    router.push(`products/${id}`);
  };
  return (
    <div className="group ">
      <div className=" flex bg-[#f7f8f7] group-hover:bg-inherit  ">
        <div className="flex flex-col justify-end space-y-3 ml-3 mb-3 text-[#151875] opacity-0 group-hover:opacity-100">
          <IconButton size="small">
            <AddShoppingCartOutlinedIcon
              onClick={() => increaseCartQuantity(id)}
            />
          </IconButton>
          <IconButton size="small">
            <FavoriteBorderOutlinedIcon onClick={() => addFavoritreItem(id)} />
          </IconButton>
          <IconButton size="small">
            <SavedSearchIcon onClick={() => takeToProductDetail(id)} />
          </IconButton>
        </div>
        <img
          src={imgUrl}
          alt="product"
          className="scale-90  w-[280px] h-[350px] object-contain  "
        />
      </div>
      <div className="flex mt-3 justify-between  text-[#151875] mb-5">
        <h3>{title}</h3>
        <h3>
          ${price}.00
          <span className=" text-xs text-[#FB2E86] line-through">
            ${oldPrise}.00
          </span>
        </h3>
      </div>
    </div>
  );
};

export default LatestPCard;
