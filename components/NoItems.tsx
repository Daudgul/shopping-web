import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Background from "../public/imgs/NoItems.webp";

const NoItems = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center text-pink-500 space-y-5 flex-col bt-[50px] mb-[100px]">
        <Image src={Background} width={400} height={400} objectFit="contain" />
        <h1 className="text-2xl ">No Favorite Item Found!</h1>
        <p>Add Item now</p>
        <Button href="/" variant="contained" disableElevation>
          Home Page
        </Button>
      </div>
    </>
  );
};

export default NoItems;
