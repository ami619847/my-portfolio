import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      background:{ 
        default: '#f7f5f2',
        paper: '#f7f5f2', 
      },
      primary: {
        main: '#b67150',
      },
      secondary: {
        main: "#b67150"
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "none",
    },
    button: {
      textTransform: "none",
    },
  });

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
          <link rel="manifest" href="./favicon/site.webmanifest" />
          <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <Navbar />
        <Footer />
    </ThemeProvider>
  );
};
