import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import PageInfo from "../components/PageInfo";
import NoItems from "../components/NoItems";
import BasketSectionOne from "../components/BasketSectionOne";
//

const basket = () => {
  const { cartItems } = useShoppingCart();

  return (
    <div>
      <section>
        <div className=" w-full  bg-[#f2f0ff] ">
          <PageInfo title={"Shopping Cart"} />
        </div>
        <div className="max-w-6xl mx-auto my-20 lg:flex space-x-10">
          {cartItems.length === 0 ? <NoItems /> : <BasketSectionOne />}
        </div>
      </section>
    </div>
  );
};

export default basket;
