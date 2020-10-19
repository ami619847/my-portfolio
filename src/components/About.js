import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import profile from "../images/about_profile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        About me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Aryuna Poselenova
            </Typography>
            <p>I'm aspiring UX Developer based in Amsetrdam, Netherlands.</p>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          {/* <Paper className={classes.paper}> */}
          <img src={profile} alt="about_profile" width="100%" />
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
