import React from "react";
import PageInfo from "./PageInfo";
import ShoppingListCard from "./ShoppingListCard";

const BaskitSectionOne = () => {
  return (
    <section>
      <div className=" w-full  bg-[#f2f0ff] ">
        <PageInfo title={"Shopping Cart"} />
      </div>
      <div className="max-w-6xl mx-auto my-20 md:flex space-x-10">
        <div>
          <div className="text-xl text-[#151875] flex">
            <h4 className="w-[350px]">Products</h4>
            <h4 className="w-[120px] ">Price</h4>
            <h4 className="w-[170px]">Quantity</h4>
            <h4 className="w-[80px]">Total</h4>
          </div>
          <div>
            <ShoppingListCard />
            <ShoppingListCard />
            <ShoppingListCard />
            <ShoppingListCard />
          </div>
          <div className="flex justify-between mt-12">
            <button className="btn btn--primary">Update Cart</button>
            <button className="btn btn--primary">Clear Cart</button>
          </div>
        </div>
        <div className="w-[400px] ">
          <h3 className="w-full flex justify-center text-xl mb-10 text-[#151875]">
            Cart Totals
          </h3>
          <div className=" bg-[#f2f0ff] space-y-6 p-10 rounded-sm">
            <div className="cartTotal">
              <h4>Subtotals</h4>
              <h6>$219</h6>
            </div>
            <div className="cartTotal">
              <h4>Tax</h4>
              <h6>$34.40</h6>
            </div>
            <div className="cartTotal">
              <h4>Total</h4>
              <h6>$305</h6>
            </div>
            <button className="w-full py-2 rounded-sm hover:bg-green-500 bg-[#19d16f] text-white">
              {" "}
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaskitSectionOne;
