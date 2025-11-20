import React from 'react';
import PropTypes from 'prop-types';
import logo from "../files/logo_grey.png";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Link href="/" color="inherit" sx={{ textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="logo" sx={{ width: 40, mr: 2 }} />
          </Link>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navbar tabs"
            sx={{ marginLeft: 'auto' }}
          >
            <Tab sx={{ textTransform: "none" }} label="About" {...a11yProps(0)} />
            <Tab sx={{ textTransform: "none" }} label="Projects" {...a11yProps(1)} />
            <Tab sx={{ textTransform: "none" }} label="Contact" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
      </AppBar>

      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Portfolio />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
    </Box>
  );
};
