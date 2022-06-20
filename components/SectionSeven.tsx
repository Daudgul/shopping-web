import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "./Card";
import PicOne from "../img/pic-1.webp";
import PicTwo from "../img/pic-2.webp";
import PicThree from "../img/pic-3.webp";
import PicFour from "../img/pic-4.webp";
import { Grid, Paper, Stack } from "@mui/material";
import CardTwo from "./CardTwo";
import Image from "next/image";
import MainPic1 from "../img/ProductPic2.webp";
import MainPic2 from "../img/ProductPic3.webp";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import productPic from "../img/img-1.png";

const SectionSeven = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto py-3 mt-10">
        <h1 className="mainHeading mb-0">Discount Items</h1>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                <Tab className="tab-items mx-1" label="Wood Chair" value="1" />
                <Tab
                  className="tab-items mx-1"
                  label="Plastic Chair"
                  value="2"
                />
                <Tab
                  className="tab-items mx-1"
                  label="Sofa Colletion"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container>
                <Grid className="mainContent" item sm={6}>
                  <h3 className=" md:text-4xl font-semibold">
                    20% Discount Of All Products
                  </h3>
                  <h4 className="text-[#FB2E86] text-lg">Eams Sofa Compact</h4>
                  <div className="text-[#dcd4ef] text-sm">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus maxime sapiente soluta iusto illum molestiae,
                      dignissimos laboriosam!
                    </p>
                    <ul className="flex  mt-4">
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <ul className="flex flex-wrap my-3">
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor amet.
                      </li>
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor amet.
                      </li>
                    </ul>
                  </div>
                  <div className="flex space-x-6">
                    <button className="btn btn--primary rounded w-48">
                      Shop Now
                    </button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <Image src={MainPic2} width={450} height={450} />
                </Grid>
              </Grid>
            </TabPanel>

            {/* ///////////////////////// TAB #2 ////////////////////  */}

            <TabPanel value="2">
              <Grid container>
                <Grid className="mainContent" item sm={6}>
                  <h3 className=" md:text-4xl font-semibold">
                    20% Discount Of All Products
                  </h3>
                  <h4 className="text-[#FB2E86] text-lg">Eams Sofa Compact</h4>
                  <div className="text-[#dcd4ef] text-sm">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus maxime sapiente soluta iusto illum molestiae,
                      dignissimos laboriosam!
                    </p>
                    <ul className="flex  mt-4">
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <ul className="flex flex-wrap my-3">
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor amet.
                      </li>
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor amet.
                      </li>
                    </ul>
                  </div>
                  <div className="flex space-x-6">
                    <button className="btn btn--primary rounded w-48">
                      Shop Now
                    </button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <Image src={MainPic1} width={450} height={450} />
                </Grid>
              </Grid>
            </TabPanel>

            {/* ///////////////////////// TAB #3 ////////////////////  */}

            <TabPanel value="3">
              <Grid container>
                <Grid className="mainContent" item sm={6}>
                  <h3 className=" md:text-4xl font-semibold">
                    20% Discount Of All Products
                  </h3>
                  <h4 className="text-[#FB2E86] text-lg">Eams Sofa Compact</h4>
                  <div className="text-[#dcd4ef] text-sm">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus maxime sapiente soluta iusto illum molestiae,
                      dignissimos laboriosam!
                    </p>
                    <ul className="flex  mt-4">
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <ul className="flex flex-wrap my-3">
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor amet.
                      </li>
                      <li className=" flex-1">
                        <span>
                          <CheckOutlinedIcon className="text-[#7e33e0]" />
                        </span>
                        Lorem ipsum dolor amet.
                      </li>
                    </ul>
                  </div>
                  <div className="flex space-x-6">
                    <button className="btn btn--primary rounded w-48">
                      Shop Now
                    </button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="relative justify-center flex items-center">
                    <div
                      className="w-4/5 h-4/5 z-10 bg-[#eeddfb] absolute "
                      style={{
                        borderRadius: "34% 88% 55% 63% / 58% 69% 67% 65%",
                      }}
                    >
                      {""}
                    </div>

                    <Image
                      className=" z-30 "
                      src={productPic}
                      width={450}
                      height={450}
                    />
                  </div>
                </Grid>
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

export default SectionSeven;
