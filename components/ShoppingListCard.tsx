import Image from "next/image";
import React from "react";
import img from "../img/img-1.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { IconButton, Tooltip } from "@mui/material";
import storeItems from "../data/allData.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

const ShoppingListCard = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className=" flex border-b-2 max-w-[860px] shadow mt-4 ">
      <div className="flex  space-x-2 items-center w-[350px]">
        <img
          src={item.imgUrl}
          alt="product image"
          width={100}
          height={100}
          className="h-[100px] w-[100px]"
        />
        <div>
          <h6 className="text-sm">Chair Cum Sofa</h6>
          <p className="text-xs text-gray-300">Color XYX</p>
          <p className="text-xs text-gray-300">Size M</p>
        </div>
      </div>
      <h6 className="text-[#151875] w-[120px] my-auto">$32.00</h6>
      <div className="w-[170px] my-auto text-gray-300  ">
        <div className="border w-20 bg-slate-400">
          <button className="bg-slate-500 hover:bg-slate-600">
            <AddOutlinedIcon />
          </button>
          <span className="px-3 text-black">1</span>
          <button className="bg-slate-500 hover:bg-slate-600">
            <RemoveOutlinedIcon />
          </button>
        </div>
      </div>
      <h6 className="w-[80px] my-auto relative">
        $219.00{" "}
        <span className="absolute -top-10 right-2 ">
          {" "}
          <Tooltip title="Delete " arrow placement="top-end">
            <IconButton size="small">
              <CloseOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </span>
      </h6>
    </div>
  );
};

export default ShoppingListCard;
