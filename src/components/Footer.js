import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    bottom: 0,
    position: 'sticky'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item md={7}></Grid>
        <Grid className={classes.grow} container item md={5} justify="center">
          <IconButton color="inherit">
            <Link href="https://www.linkedin.com/in/aryuna-poselenova-6b063521/" target="_blank">
              <LinkedInIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link href="https://github.com/ami619847" target="_blank">
              <GitHubIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link style={{ textDecoration: 'none' }} href="mailto:ami619847@gmail.com?subject=Mail%20from%20the%20website" >
              <EmailIcon />
            </Link>
          </IconButton>
        </Grid>
      </Grid> 
    </footer>
  );
};
