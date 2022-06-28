import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import background from "../img/sink.jpg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[400px] overflow-hidden">
        <div className="flex items-center justify-center mx-auto w-full h-[450px] bg-transparent  z-20">
          <div className="flex flex-col justify-center items-center z-30">
            <h1 className="text-4xl text-white">
              Get Leatest Update By Subscribe
            </h1>
            <h1 className="text-4xl text-white">Our Newslater</h1>

            <Button
              disableElevation
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              href="/products"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/empty-tabletop-product-display-with-blurred-bathroom_41470-3566.jpg?t=st=1655969066~exp=1655969666~hmac=e33ff56eb08b657362a9b89690147b2f041c043743be0d6f7a1019e6d6870066&w=1060"
          className="w-full h-[650px] -mt-[600px] "
        />
      </div>
    </>
  );
};

export default Footer;
