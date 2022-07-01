import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const ShopexOffer = () => {
  return (
    <div className="max-w-6xl mx-auto py-3 mt-10">
      <h1 className="mainHeading">What Shopex Offer!</h1>
      <Container>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item sm={6} md={3}>
            <Paper
              className="queryItems"
              sx={{
                width: "1/4",
                height: "300px",
              }}
            >
              <h1 className=" text-xl mb-5">24/7 Support</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. vero in
                facere id dolorum.
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
              <h1 className=" text-xl mb-5">24/7 Support</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. vero in
                facere id dolorum.
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
              <h1 className=" text-xl mb-5">24/7 Support</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. vero in
                facere id dolorum.
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
              <h1 className=" text-xl mb-5">24/7 Support</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. vero in
                facere id dolorum.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ShopexOffer;
