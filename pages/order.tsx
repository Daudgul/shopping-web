import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";
import Check from "../img/checkmark.webp";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import logo5 from "../img/logo5.png";
import Clock from "../img/clock.webp";
import textBook from "../img/textbook.webp";

const OrderCompleted = () => {
  return (
    <>
      <section>
        <Header />
        <PageInfo title="Order Completed" />
      </section>
      <section className="max-w-6xl mx-auto flex justify-center flex-col items-center mt-20">
        <div className="flex flex-col items-center my-20 space-y-8  md:w-[1000px] px-24 pb-16 border-b-2 border-dotted border-l-2 relative">
          <div className="absolute -top-2 -left-11">
            <Image src={Clock} width={80} height={80} alt="img1" />
          </div>
          <Image src={Check} width={80} height={80} alt="img1" />
          <h1 className="text-4xl text-[#151875]">Your Order Is Completed!</h1>
          <p className=" text-blue-600 text-center">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              width: "300px",
            }}
            href="/"
            className="btn btn--primary capitalize"
          >
            Continue Shopping
          </Button>
          <div className="absolute -bottom-12 -right-12">
            <Image src={textBook} width={70} height={80} alt="img1" />
          </div>
        </div>

        <div className="flex w-full justify-around my-28 mx-10">
          <Image src={logo1} height={100} width={160} />
          <Image src={logo2} height={100} width={160} />
          <Image src={logo3} height={100} width={160} />
          <Image src={logo4} height={100} width={160} />
          <Image src={logo5} height={100} width={160} />
        </div>
      </section>
    </>
  );
};

export default OrderCompleted;
