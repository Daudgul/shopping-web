import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import productPic from "../img/img-1.png";
import productOne from "../img/img-3.png";
import productTwo from "../img/img-2.png";
import productThree from "../img/img-4.png";
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Finger+Paint&family=Josefin+Sans:wght@600&family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <SectionOne />
      <Carousel />
    </div>
  );
};

export default Home;
