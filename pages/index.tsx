import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import SectionOne from "../components/SectionOne";

import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>
  );
};

export default Home;
