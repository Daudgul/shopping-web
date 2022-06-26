import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { AuthProvider } from "../hooks/useAuth";

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
      <ShoppingCartProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
