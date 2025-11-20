import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const theme = createTheme({
    palette: {
      background: {
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
  });

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Navbar />
      <Footer />
    </ThemeProvider>
  );
};
