import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import productPic from "../img/img-1.png";
import productOne from "../img/img-3.png";
import productTwo from "../img/img-2.png";
import productThree from "../img/img-4.png";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import {
  createTheme,
  colors,
  ThemeProvider,
  Paper,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB2E86",
    },
    secondary: {
      main: colors.orange[500],
    },
  },

  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  },
});
const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="">
        <Head>
          <title>Store</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Finger+Paint&family=Josefin+Sans:wght@600&family=Lato:wght@100;300;400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </div>
    </ThemeProvider>
  );
};

export default Home;
