import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
// import BehanceIcon from "../images/behance.png";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <a href="mailto:ami619847@gmail.com?subject=Mail%20from%20the%20website" >
              <EmailIcon />
            </a>
          </Fab>
          <Typography variant="caption">
            © Aryuna Poselenova
          </Typography>

          {/* keeps the icons at the right corner, without - on the left */}
          <div className={classes.grow} />
          <IconButton color="inherit">
            <a href="https://www.linkedin.com/in/aryuna-poselenova-6b063521/" target="_blank">
              <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton color="inherit">
            <a href="https://github.com/ami619847" target="_blank">
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton color="inherit">
            <a style={{ textDecoration: 'none' }} href="mailto:ami619847@gmail.com?subject=Mail%20from%20the%20website" >
              {/* <IconButton src={BehanceIcon} color="white"></IconButton> */}
              <EmailIcon />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
