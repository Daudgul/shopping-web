import React from "react";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";
import WhishlistCard from "../components/WhishlistCard";
import { useShoppingCart } from "../context/ShoppingCartContext";

const whishlist = () => {
  const { favoriteItems } = useShoppingCart();
  return (
    <>
      <Header />
      <section>
        <div className=" w-full  bg-[#f2f0ff] ">
          <PageInfo title={"Shop List"} />
        </div>
        <div className="max-w-6xl mx-auto my-20 ">
          <div className="flex justify-between items-center my-5 ">
            <div>
              <h1 className="text-2xl text-[#151875]">
                Your favorite Products are here
              </h1>
              <h3 className="text-sm text-gray-400">
                Don't miss your chance /{" "}
                <span className="text-[#FB3E86]">BUY NOW </span>
              </h3>
            </div>
            <h3 className="text-[#151875]">
              Total-Items -{" "}
              <span className="border px-5 py-2 rounded-sm mr-10 text-[#FB3E86]">
                {favoriteItems.length}
              </span>{" "}
            </h3>
          </div>
          <div className="my-16">
            {favoriteItems.map((item) => (
              <WhishlistCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default whishlist;
