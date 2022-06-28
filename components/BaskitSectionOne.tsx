import { Button } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingListCard from "./ShoppingListCard";
import storeItems from "../data/allData.json";

const BaskitSectionOne = () => {
  const { cartItems, clearCart } = useShoppingCart();

  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  return (
    <>
      <div>
        <div className="text-xl text-[#151875] flex">
          <h4 className="w-[350px]">Products</h4>
          <h4 className="w-[120px] ">Price</h4>
          <h4 className="w-[170px]">Quantity</h4>
          <h4 className="w-[80px]">Total</h4>
        </div>
        <div>
          {cartItems.map((item) => (
            <ShoppingListCard key={item.id} {...item} />
          ))}
        </div>
        <div className="flex justify-between mt-12">
          <Button
            disableElevation
            href="/"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Update Cart
          </Button>
          <Button
            disableElevation
            onClick={() => clearCart()}
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Clear Cart
          </Button>
        </div>
      </div>
      <div className="w-[400px] ">
        <h3 className="w-full flex justify-center text-xl mb-10 text-[#151875]">
          Cart Totals
        </h3>
        <div className=" bg-[#f2f0ff] space-y-6 p-10 rounded-sm">
          <div className="cartTotal">
            <h4>Subtotals</h4>
            <h6>${total}.00</h6>
          </div>
          <div className="cartTotal">
            <h4>Delivery Charge</h4>
            <h6>Free</h6>
          </div>
          <div className="cartTotal">
            <h4>Tax</h4>
            <h6>$14.40</h6>
          </div>
          <div className="cartTotal">
            <h4>Total</h4>
            <h6>${total + 14.4}</h6>
          </div>
          <Button
            disableElevation
            href="/order"
            variant="contained"
            color="secondary"
            sx={{ textTransform: "capitalize" }}
            className="w-full py-2 rounded-sm hover:bg-green-500 bg-[#19d16f] text-white capitalize"
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default BaskitSectionOne;
