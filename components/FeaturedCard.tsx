import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/allData.json";
import { IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { color } from "@mui/system";
type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  oldPrise: number;
  rating: number;
  details: string;
};

const FeaturedCard = ({
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

  const item = cartItems.find((i) => i.id === id);
  const favItem = favoriteItems.find((i) => i.id === id);

  // const itemsz = storeItems.filter((item) => {
  //   return item.category?.includes(id);
  // });

  // if (item == null) return null;
  // console.log(item);
  const router = useRouter();

  const takeToProductDetail = (id: number) => {
    router.push(`products/${id}`);
  };
  return (
    <div>
      <div className="flex rounded flex-col w-60 my-8  group shadow-2xl   ">
        <div className="flex flex-col bg-[#f6f7fb]">
          <div className=" text-sky-400 space-x-4  translate-y-0.5 scale-75 opacity-0 group-hover:opacity-100   -mb-4 ">
            {item ? (
              <Tooltip placement="top" title="Remove from cart">
                <IconButton color="primary" size="small">
                  <AddShoppingCartOutlinedIcon
                    onClick={() => removeFromCart(id)}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                placement="top"
                title="Add to cart"
                className=" hover:text-pink-600"
              >
                <IconButton size="small">
                  <AddShoppingCartOutlinedIcon
                    className={`${item && "bg-slate-600"}`}
                    onClick={() => increaseCartQuantity(id)}
                  />
                </IconButton>
              </Tooltip>
            )}
            {/* ////////////////////////// favItem \\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            {favItem ? (
              <Tooltip placement="top" title="Remove from cart">
                <IconButton color="primary" size="small">
                  <FavoriteBorderOutlinedIcon
                    onClick={() => removeFavItem(id)}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                placement="top"
                title="Add to cart"
                className=" hover:text-pink-600"
              >
                <IconButton size="small">
                  <FavoriteBorderOutlinedIcon
                    onClick={() => addFavoritreItem(id)}
                  />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip placement="top" title="show more details">
              <IconButton size="small" className=" hover:text-pink-600">
                <SavedSearchIcon onClick={() => takeToProductDetail(id)} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src={imgUrl}
              alt="product"
              className="scale-90 group-hover:scale-75 transition duration-500 h-[250px] w-[180px] object-contain "
            />
          </div>
          <button
            onClick={() => takeToProductDetail(id)}
            className=" -mt-6 opacity-0 group-hover:opacity-100 text-xs p-2  rounded bg-[#09d15d] hover:bg-green-600 mx-auto text-white"
          >
            View Detail
          </button>
        </div>
        <div className="  w-60 flex flex-col justify-center text-[#151875] items-center space-y-1 group-hover:text-white group-hover:bg-[#2f1ac4] mt-1 transition duration-200">
          <h2 className=" text-xl text-[#FB2E86] group-hover:text-white mt-1 ">
            {title}
          </h2>
          <div className="flex space-x-1">
            <div className=" bg-sky-400 w-4 h-1 rounded-md"> </div>
            <div className=" bg-pink-600 w-4 h-1 rounded-md">{""}</div>
            <div className=" bg-yellow-400 w-4 h-1 rounded-md">{""}</div>
          </div>
          <p>Code - Y523201</p>
          <p className="pb-2"> ${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
