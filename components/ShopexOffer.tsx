import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";

import FeatureOne from "../img/stickers1.webp";
import FeatureTwo from "../img/stickers2.webp";
import FeatureThree from "../img/stickers3.webp";
import FeatureFour from "../img/stickers4.webp";

const ShopexOffer = () => {
  return (
    <div className="max-w-6xl mx-auto py-3">
      <h1 className="mainHeading">What Shopex Offer!</h1>
      <Container>
        <div>
          <Grid container rowSpacing={4}>
            <Grid item sm={6} md={3}>
              <Paper
                className="queryItems"
                sx={{
                  width: "1/4",
                  height: "300px",
                }}
              >
                <Image
                  src={FeatureOne}
                  width={65}
                  height={65}
                  alt="free delivery"
                />
                <h1 className=" text-xl my-3">Free Delivery</h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. vero
                  in facere id dolorum.
                </p>
              </Paper>
            </Grid>
            <Grid item sm={6} md={3}>
              <Paper
                className="queryItems "
                sx={{
                  width: "1/4",
                  height: "300px",
                }}
              >
                <Image
                  src={FeatureTwo}
                  width={65}
                  height={65}
                  alt="free delivery"
                />
                <h1 className=" text-xl  my-3">100% Cash Back</h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. vero
                  in facere id dolorum.
                </p>
              </Paper>
            </Grid>
            <Grid item sm={6} md={3}>
              <Paper
                className="queryItems "
                sx={{
                  width: "1/4",
                  height: "300px",
                }}
              >
                <Image
                  src={FeatureThree}
                  width={65}
                  height={65}
                  alt="free delivery"
                />
                <h1 className=" text-xl  my-3">Quality Product</h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. vero
                  in facere id dolorum.
                </p>
              </Paper>
            </Grid>
            <Grid item sm={6} md={3}>
              <Paper
                className="queryItems "
                sx={{
                  width: "1/4",
                  height: "300px",
                }}
              >
                <Image
                  src={FeatureFour}
                  width={65}
                  height={65}
                  alt="free delivery"
                />
                <h1 className=" text-xl  my-3">24/7 Support</h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. vero
                  in facere id dolorum.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ShopexOffer;
