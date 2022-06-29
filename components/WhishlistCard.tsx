import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import storeItems from "../data/allData.json";
import { IconButton, Rating, Tooltip } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useRouter } from "next/router";

type CartItemProps = {
  id: number;
  quantity: number;
};

const WhishlistCard = ({ id, quantity }: CartItemProps) => {
  const router = useRouter();
  const takeToProductDetail = (id: number) => {
    router.push(`products/${id}`);
  };
  const { removeFavItem, increaseCartQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="max-w-5xl my-5">
      <div className="flex space-x-5 text-sm ">
        <img
          src={item.imgUrl}
          width={300}
          height={250}
          alt="product img"
          className="sm:h-[250px] sm:w-[300px] h-20 w-20 object-contain"
        />
        <div className="text-[#151875] space-y-2 justify-center flex flex-col">
          <h4 className="text-xl">{item.title}</h4>
          <div className="flex space-x-3">
            <h6>${item.price}.00</h6>
            <h6 className="text-[#FB3E86] line-through">${item.oldPrise}.00</h6>
            <Rating className="text-sm" name="read-only" value={4} readOnly />
          </div>
          <p className=" text-[#2f1ac4]">{item.details}</p>
          <div className="flex items-center pt-2 text-[#151875] space-x-8">
            <Tooltip title="Add to Cart " arrow placement="top-end">
              <IconButton size="small">
                <AddShoppingCartOutlinedIcon
                  onClick={() => increaseCartQuantity(id)}
                />
              </IconButton>
            </Tooltip>
            <IconButton size="small">
              <SavedSearchIcon onClick={() => takeToProductDetail(id)} />
            </IconButton>

            <Tooltip title="Remove from Whish List" arrow placement="top-end">
              <IconButton size="small">
                <CloseOutlinedIcon
                  onClick={() => removeFavItem(item.id)}
                  fontSize="small"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhishlistCard;
