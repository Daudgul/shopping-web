import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";
import image from "../img/img404.png";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className=" w-full  bg-[#f2f0ff] ">
        <PageInfo title={"404 Not Found"} />
      </div>
      <div className=" max-w-6xl mx-auto flex flex-col items-center mt-8 mb-28">
        <Image src={image} width={700} height={500} alt="404Img" />
        <Link href="/">
          <button className="btn btn--primary my-5">Back To Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
