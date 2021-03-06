import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import { IconButton, Tooltip } from "@mui/material";
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
  const {
    increaseCartQuantity,
    addFavoritreItem,
    cartItems,
    removeFromCart,
    favoriteItems,
    removeFavItem,
  } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  const router = useRouter();

  const takeToProductDetail = (id: number) => {
    router.push(`products/${id}`);
  };

  const cartItem = cartItems.find((i) => i.id === id);
  const favItem = favoriteItems.find((i) => i.id === id);
  return (
    <div className="group w-[280px] lg:w-[310px] xl:w-[360px] h-[306px] m-3  ">
      <div className=" w-full h-[270px] flex bg-[#f7f8f7] flex-col items-end justify-center sm:flex-row group-hover:bg-inherit  ">
        <div className="flex items-end sm:flex-col sm:justify-end space-y-3 -ml-7 mb-4 text-[#151875] opacity-0 group-hover:opacity-100">
          {cartItem ? (
            <Tooltip placement="right" title="Remove from cart">
              <IconButton
                onClick={() => removeFromCart(id)}
                color="primary"
                size="small"
              >
                <AddShoppingCartOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip
              placement="right"
              title="Add to cart"
              className=" hover:text-pink-600"
            >
              <IconButton onClick={() => increaseCartQuantity(id)} size="small">
                <AddShoppingCartOutlinedIcon color="success" />
              </IconButton>
            </Tooltip>
          )}
          {/* ////////////////////////// favItem \\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {favItem ? (
            <Tooltip placement="right" title="Remove from cart">
              <IconButton
                onClick={() => removeFavItem(id)}
                color="primary"
                size="small"
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip
              placement="right"
              title="Add to cart"
              className=" hover:text-pink-600"
            >
              <IconButton onClick={() => addFavoritreItem(id)} size="small">
                <FavoriteBorderOutlinedIcon color="success" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip placement="right" title="show more details">
            <IconButton
              onClick={() => takeToProductDetail(id)}
              size="small"
              className=" hover:text-pink-600"
            >
              <SavedSearchIcon color="success" />
            </IconButton>
          </Tooltip>
        </div>
        <img
          src={imgUrl}
          alt="product"
          className=" w-[222px] h-[222px] object-contain  "
        />
      </div>
      <div className="flex mt-3 justify-between text-sm lg:text-base text-[#151875] mb-5">
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
