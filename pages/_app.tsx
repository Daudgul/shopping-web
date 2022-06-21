import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, colors, ThemeProvider } from "@mui/material";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
