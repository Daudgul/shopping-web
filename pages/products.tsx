import { Pagination } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";
import ProductsCard from "../components/ProductsCard";
import productOne from "../img/img-3.png";
import { Data } from "../components/data";

const Products = () => {
  let [page, setPage] = useState(1);

  const count = Math.ceil(Data.length / 8);
  //   const _DATA = usePagination(Data, total);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

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

        <div className="flex justify-around md:justify-between flex-wrap">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
          {Data.slice((page - 1) * 8, page * 8).map((card: any) => (
            <ProductsCard key={card.id} image={card.img.src} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
function usePagination(data: any, PER_PAGE: number) {
  throw new Error("Function not implemented.");
}
