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
import { Grid, Stack } from "@mui/material";
import CardTwo from "./CardTwo";

const SectionThree = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto py-3 mt-10">
        <h1 className="mainHeading">Featured Products</h1>
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
                <Tab className="tab-items" label="New arival" value="1" />
                <Tab className="tab-items" label="Best seller" value="2" />
                <Tab className="tab-items" label="featured" value="3" />
                <Tab className="tab-items" label="Special offer" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container columnSpacing={4}>
                <Grid item sm={6} md={4}>
                  <CardTwo image={PicOne.src} />
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardTwo image={PicThree.src} />
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardTwo image={PicTwo.src} />
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardTwo image={PicFour.src} />
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardTwo image={PicFour.src} />
                </Grid>
                <Grid item sm={6} md={4}>
                  <CardTwo image={PicFour.src} />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Card image={PicThree.src} />
            </TabPanel>
            <TabPanel value="3">
              <Card image={PicFour.src} />
            </TabPanel>
            <TabPanel value="4">
              <Card image={PicFour.src} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

export default SectionThree;
