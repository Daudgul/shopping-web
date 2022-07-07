import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Data from "../data/allData.json";

const FindInput = () => {
  const [searchItems, setSearchItems] = useState("");

  const item = Data.filter((e) => {
    if (searchItems === "") {
      return "";
    } else {
      return e.title?.toLowerCase().includes(searchItems.toLowerCase());
    }
  });
  console.log(item);

  return (
    <div>
      <form className="group relative flex">
        <input
          className="focus:ring-2 group-focus:ring-[#FB2E86] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400  py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Filter projects"
          placeholder="Search projects..."
          onChange={(e) => setSearchItems(e.target.value)}
        />
        <button className=" bg-[#FB2E86] w-16 text-white border border-[#FB2E86] scale-105">
          <SearchIcon />
        </button>
        <div className="absolute top-14 left-11">
          {/* <>
            {item.map((e) => {
              <p key={e.id}>{e.title}hello</p>;
            })}
          </> */}
        </div>
      </form>
    </div>
  );
};

export default FindInput;
