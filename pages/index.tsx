import type { NextPage } from "next";

import Header from "../components/Header";
import SectionOne from "../components/SectionOne";

import Footer from "../components/Footer";
import UniqueFeatures from "../components/UniqueFeatures";
import TopCategory from "../components/TopCategory";
import TrendingProducts from "../components/TrendingProducts";
import DiscountItems from "../components/DiscountItems";
import FeaturedProducts from "../components/featuredProducts";
import LatestProducts from "../components/latestProducts";
import ShopexOffer from "../components/shopexOffer";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <SectionOne />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItems />
      <TopCategory />
      <Footer />
    </div>
  );
};

export default Home;
