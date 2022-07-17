import { Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import PageInfo from "../components/PageInfo";
import image from "../img/pic-aboutus.webp";
import clientOne from "../img/client1.webp";
import clientTwo from "../img/client2.webp";
import clientThree from "../img/client3.webp";
import FeatureOne from "../img/stickers1.webp";
import FeatureTwo from "../img/stickers2.webp";
import FeatureThree from "../img/stickers3.webp";
import FeatureFour from "../img/stickers4.webp";
import { Container } from "@mui/system";

const AboutUs = () => {
  return (
    <>
      <PageInfo title=" About Us" />
      <Container>
        <section className=" max-w-6xl mx-auto flex flex-col md:flex-row my-20">
          <div className="sm:w-[500px] mr-6 ">
            <div className="bg-[#2f1ac4] rounded sm:w-[480px] sm:h-[360px] ">
              <div className=" sm:w-[480px]  sm:h-[340px] rounded translate-x-4   flex ">
                <Image
                  className="rounded "
                  src={image}
                  width={500}
                  height={440}
                  alt="Clint pic"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-[500px] flex flex-col justify-center space-y-8">
            <h1 className="sm:text-4xl mt-10 sm:mt-0 text-xl  text-[#151875]">
              Know About Our E-commerce Business, History
            </h1>
            <p className="sm:text-sm text:xs text-[#2f1ac4]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              dolor provident enim porro doloremque sed, minima facilis maiores
              odio magni illo nostrum perspiciatis voluptas. Pariatur iure
              quidem minima iste quasi.
            </p>
            <Button
              disableElevation
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              className="btn btn--primary capitalize"
              href="/contact"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </Container>
      <section className="max-w-6xl mx-auto">
        <h1 className="mainHeading text-black font-bold">Our Features</h1>
        <Container>
          <div>
            <Grid container columnSpacing={4} rowSpacing={4}>
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
                    width={80}
                    height={80}
                    alt="free delivery"
                  />
                  <h1 className=" text-xl mb-5">Free Delivery</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    vero in facere id dolorum.
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
                    width={80}
                    height={80}
                    alt="free delivery"
                  />
                  <h1 className=" text-xl mb-5">100% Cash Back</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    vero in facere id dolorum.
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
                    width={80}
                    height={80}
                    alt="free delivery"
                  />
                  <h1 className=" text-xl mb-5">Quality Product</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    vero in facere id dolorum.
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
                    width={80}
                    height={80}
                    alt="free delivery"
                  />
                  <h1 className=" text-xl mb-5">24/7 Support</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    vero in facere id dolorum.
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section className="w-full bg-purple-50 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center p-[100px]">
          <h2 className="sm:text-4xl text-xl mb-8">Our Client Say!</h2>
          <div className="w-[220px] h-[100px] flex items-center">
            <Image src={clientThree} width={60} height={60} alt="clintOne" />
            <div className="mx-3 -translate-y-3">
              <Image src={clientTwo} width={60} height={60} alt="clintTwo" />
            </div>
            <Image src={clientOne} width={60} height={60} alt="clintThree" />
          </div>
          <h6 className="text-xl">Selena Gomez</h6>
          <p className="text-xs text-[#2f1ac4]">Ceo At Webcy digital</p>

          <p className="md:p-5 text-xs sm:text-base my-5 text-[#2f1ac4]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            aperiam non deleniti delectus sint omnis rem facere officiis!
            Suscipit reiciendis molestiae tempore porro facere dicta eaque iusto
            Suscipit reiciendis molestiae tempore porro facere dicta eaque iusto
            Suscipit reiciendis molestiae tempore porro facere dicta eaque iusto
            facilis tenetur maxime!
          </p>
          <div className="flex space-x-1">
            <div className="w-4 h-1 rounded-md bg-pink-200"> </div>
            <div className="w-6 h-1 rounded-md bg-[#FB2E86]"> </div>
            <div className="w-4 h-1 rounded-md bg-pink-200"> </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
