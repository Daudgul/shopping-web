import { Pagination } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import PageInfo from "../../components/PageInfo";
import ProductsCard from "../../components/ProductsCard";
import productOne from "../img/img-3.png";
import { Data } from "../../components/data";
import storeItems from "../../data/allData.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";
const Products = () => {
  let [page, setPage] = useState(1);

  const count = Math.ceil(storeItems.length / 12);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

  // ?????????????

  return (
    <div>
      <Header />
      <PageInfo title="Ecommerce Acceories" />
      <section className="max-w-6xl mx-auto">
        <div className="my-20">
          <h2 className="text-2xl text-[#151875]">
            Ecommerce Acceories & Fashion Items
          </h2>
          <p>About 9,620 results(0.63seconds)</p>
        </div>

        <div className="flex justify-around md:justify-between flex-wrap object-cover">
          {storeItems.slice((page - 1) * 12, page * 12).map((item) => (
            <ProductsCard key={item.id} {...item} />
          ))}
        </div>
        <Pagination
          className="flex items-center justify-center my-10"
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </section>
    </div>
  );
};

export default Products;
function usePagination(data: any, PER_PAGE: number) {
  throw new Error("Function not implemented.");
}
function id(id: any) {
  throw new Error("Function not implemented.");
}
