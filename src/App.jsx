import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import GameIntegrationCaseStudy from "./components/GameIntegrationCaseStudy";

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
      <BrowserRouter basename="/my-portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/game-integration-case-study" element={<GameIntegrationCaseStudy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
