import React from 'react';
import logo from "../files/logo_grey.png";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Map paths to tab index
  const pathToIndex = {
    "/": 0,
    "/projects": 1,
    "/contact": 2,
  };

  const currentIndex = pathToIndex[location.pathname] ?? false;

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box component="img" src={logo} alt="logo" sx={{ width: 40, mr: 2 }} />
          </Box>
          <Tabs
            value={currentIndex}
            aria-label="navbar tabs"
            sx={{ marginLeft: 'auto' }}
          >
            <Tab
              sx={{ textTransform: "none" }}
              label="About"
              component={RouterLink}
              to="/"
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Projects"
              component={RouterLink}
              to="/projects"
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Contact"
              component={RouterLink}
              to="/contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
