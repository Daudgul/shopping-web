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
        <h1 className="mainHeading">Latest Products</h1>
        <Container>
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
                  <Tab className="tab-items" label="New arival" value="1" />
                  <Tab className="tab-items" label="Best seller" value="2" />
                  <Tab className="tab-items" label="featured" value="3" />
                  <Tab className="tab-items" label="Special offer" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container columnSpacing={4} sx={{ mx: "auto" }}>
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
            </TabContext>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default LatestProducts;
