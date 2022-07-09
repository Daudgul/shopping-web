import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "../data/allData.json";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/router";

type Product = {
  id: number;
  label: string;
};

const FindInput = () => {
  const [searchItem, setSearchItem] = useState<Product | null>(null);

  const products = data.map((item) => ({
    id: item.id,
    label: item.title,
  }));

  console.log(searchItem);
  const sameId = searchItem?.id;

  const router = useRouter();

  const takeToProductDetail = (id: number | undefined) => {
    if (router.pathname.includes("products/")) {
      return router.replace(`${id}`);
    } else {
      router.replace(`products/${id}`);
    }
    setSearchItem(null);
  };

  return (
    <>
      <div>
        <div className="group relative flex">
          <Autocomplete
            className=" w-full text-sm leading-6 text-slate-900 placeholder-slate-400  ring-1 ring-slate-200 shadow-sm"
            sx={{
              "& input": {
                padding: "4px",
              },
            }}
            id="custom-input-demo"
            options={products}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input type="text" {...params.inputProps} />
              </div>
            )}
            value={searchItem}
            onChange={(event: any, newValue: Product | null) =>
              setSearchItem(newValue)
            }
          />

          <button
            onClick={() => takeToProductDetail(sameId)}
            className=" bg-[#FB2E86] w-16 text-white border border-[#FB2E86] scale-105"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default FindInput;
