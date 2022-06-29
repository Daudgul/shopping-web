import { Pagination } from "@mui/material";
import React, { useState } from "react";
import PageInfo from "../../components/PageInfo";
import ProductsCard from "../../components/ProductsCard";
import storeItems from "../../data/allData.json";
const Products = () => {
  let [page, setPage] = useState(1);

  const count = Math.ceil(storeItems.length / 12);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

  // ?????????????

  return (
    <div>
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
