import type { NextPage } from "next";

import SectionOne from "../components/SectionOne";

import Footer from "../components/Footer";
import TopCategory from "../components/TopCategory";
import TrendingProducts from "../components/TrendingProducts";
import DiscountItems from "../components/DiscountItems";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
import ShopexOffer from "../components/ShopexOffer";
import UniqueFeatures from "../components/UniqueFeatures";

const Home: NextPage = () => {
  return (
    <div className="">
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
