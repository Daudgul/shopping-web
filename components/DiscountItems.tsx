import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Button, Grid } from "@mui/material";
import Image from "next/image";
import MainPic1 from "../img/ProductPic2.webp";
import MainPic2 from "../img/ProductPic3.webp";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import productPic from "../img/img-1.png";

const DiscountItems = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto pt-3 mt-10">
        <h1 className="mainHeading mb-0 mt-2">Discount Items</h1>
        <Box sx={{ width: "100%", height: "597px", typography: "body1" }}>
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
                <Tab
                  className="tab-items mx-1"
                  style={{ textTransform: "capitalize" }}
                  label="Wood Chair"
                  value="1"
                />
                <Tab
                  style={{ textTransform: "capitalize" }}
                  className="tab-items mx-1"
                  label="Plastic Chair"
                  value="2"
                />
                <Tab
                  style={{ textTransform: "capitalize" }}
                  className="tab-items mx-1"
                  label="Sofa Collection"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel className="-mt-10" value="1">
              <Grid alignItems={"center"} container>
                <Grid className="mainContent" item sm={6}>
                  <h3 className=" md:text-4xl font-semibold">
                    20% Discount Of All Products
                  </h3>
                  <h4 className="text-[#FB2E86] text-lg">Eams Sofa Compact</h4>
                  <div className="text-[#2f1ac4] text-sm">
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
                    <Button
                      disableElevation
                      href="/products"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <Image src={MainPic2} width={699} height={597} />
                </Grid>
              </Grid>
            </TabPanel>

            {/* ///////////////////////// TAB #2 ////////////////////  */}

            <TabPanel value="2">
              <Grid alignItems={"center"} container>
                <Grid className="mainContent" item sm={6}>
                  <h3 className=" md:text-4xl font-semibold">
                    20% Discount Of All Products
                  </h3>
                  <h4 className="text-[#FB2E86] text-lg">Eams Sofa Compact</h4>
                  <div className="text-[#2f1ac4] text-sm">
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
                    <Button
                      disableElevation
                      href="/products"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <Image src={MainPic1} width={699} height={597} />
                </Grid>
              </Grid>
            </TabPanel>

            {/* ///////////////////////// TAB #3 ////////////////////  */}

            <TabPanel value="3">
              <Grid alignItems={"center"} container>
                <Grid className="mainContent" item sm={6}>
                  <h3 className=" md:text-4xl font-semibold">
                    20% Discount Of All Products
                  </h3>
                  <h4 className="text-[#FB2E86] text-lg">Eams Sofa Compact</h4>
                  <div className="text-[#2f1ac4] text-sm">
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
                    <Button
                      disableElevation
                      href="/products"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      Shop Now
                    </Button>
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
                      width={699}
                      height={597}
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

export default DiscountItems;
