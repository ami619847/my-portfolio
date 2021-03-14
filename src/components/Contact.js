import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={7}></Grid>
        <Grid container item md={5} justify="center">
          <Typography variant="h6" color="textSecondary" inline>
            For any inquiries regarding my work,<br />please{" "}
              <Link href="mailto:ami619847@gmail.com?subject=Mail%20from%20the%20website">
                send me an email
              </Link>
            .
          </Typography>
        </Grid>
      </Grid> 
    </div>
  );
}
