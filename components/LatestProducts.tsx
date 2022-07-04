import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Grid } from "@mui/material";
import Data from "../data/allData.json";
import LatestPCard from "./LatestPCard";
import { Container } from "@mui/system";

const LatestProducts = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const newArrival = Data.filter((item) => {
    return item.category?.includes("specialOffer");
  });
  const bestSeller = Data.filter((item) => {
    return item.category?.includes("bestSeller");
  });
  const specialOffer = Data.filter((item) => {
    return item.category?.includes("NewArrival");
  });
  const featuredItem = Data.filter((item) => {
    return item.category?.includes("featuredItem");
  });

  return (
    <>
      <div className="max-w-6xl mx-auto py-3 mt-10">
        <h1 className="mainHeading mt-6">Latest Products</h1>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            textTransform: "capitalize",
          }}
        >
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
                  style={{ textTransform: "capitalize" }}
                  className="tab-items"
                  label="New arival"
                  value="1"
                />
                <Tab
                  style={{ textTransform: "capitalize" }}
                  className="tab-items"
                  label="Best seller"
                  value="2"
                />
                <Tab
                  style={{ textTransform: "capitalize" }}
                  className="tab-items"
                  label="featured"
                  value="3"
                />
                <Tab
                  style={{ textTransform: "capitalize" }}
                  className="tab-items"
                  label="featured"
                  value="3"
                />
                <Tab
                  style={{ textTransform: "capitalize" }}
                  className="tab-items"
                  label="Special offer"
                  value="4"
                />
              </TabList>
            </Box>
            <Box className="w-full lg:h-[728px] flex items-center justify-center">
              <TabPanel value="1">
                <Grid container sx={{ mx: "auto" }}>
                  {newArrival.map((item) => (
                    <Grid key={item.id} item sm={6} md={4}>
                      <LatestPCard {...item} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid container columnSpacing={4}>
                  {bestSeller.map((item) => (
                    <Grid key={item.id} item sm={6} md={4}>
                      <LatestPCard {...item} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <Grid justifyContent="center" container columnSpacing={4}>
                  {newArrival.map((item) => (
                    <Grid key={item.id} item sm={6} md={4}>
                      <LatestPCard {...item} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="4">
                <Grid container columnSpacing={4}>
                  {featuredItem.map((item) => (
                    <Grid key={item.id} item sm={6} md={4}>
                      <LatestPCard {...item} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

export default LatestProducts;
