import React from 'react';
import PropTypes from 'prop-types';
import logo from "../files/logo_grey.png";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from "@material-ui/core/Link";

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
        <Box p={3}>
          <Typography>{children}</Typography>
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rightAlign: {
    marginLeft: 'auto',
  },
  tab: {
    textTransform: 'none',
  },
  logo: {
    maxWidth: 40,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (  
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <Tabs 
            className={classes.rightAlign}
            value={value} 
            onChange={handleChange} 
            aria-label="simple tabs"
            style={{textTransform: 'none'}}
          >
            <Tab className={classes.tab} label="About" {...a11yProps(0)}/>
            <Tab className={classes.tab} label="Projects" {...a11yProps(1)} />
            <Tab className={classes.tab} label="Contact" {...a11yProps(2)} />
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
    </div>  
  );
};
