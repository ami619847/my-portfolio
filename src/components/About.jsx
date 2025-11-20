import React, { useState } from "react";
import profile from "../files/photo.jpg";
import javascript from "../files/javascript-logo.png";
import reactLogo from "../files/react-logo.png";
import typescript from "../files/typescript-logo.png";
// import graphql from "../files/graphql-logo.png";
// import resume from "https://docs.google.com/document/d/12R5rQBu4exuYe87AMzrY2e3lQKXF-2_ztP53n20lHsM/edit?usp=sharing";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function About() {
  const [readMore, setReadMore] = useState(false);

  const extraContent =
    <Typography variant="h5" align="right" color="textSecondary" paragraph>
      with more than five years of professional experience.
      <br />
      Dedicated to creating minimalist web experiences
      <br />
      focused on user-oriented design, simplicity and functionality.
      <br />
      <img src={reactLogo} alt="react-logo" height="28" />
      <img src={javascript} alt="javascript-logo" height="30" />
      <img src={typescript} alt="typescript-logo" height="30" />
      {/* <img src={graphql} height="30" /> */}
      <br />
      Please take a look at my {" "}
      <Link
        href="https://drive.google.com/file/d/1pe3edGqbG9mzy-Tu9KVOedt0ZAdxEKyc/view?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
      >
        resume
      </Link>.
    </Typography>

  return (
    <Grid container spacing={4}>
      <Grid
        container
        size={{ md:7 }}
        alignItems='center'
        justifyContent='flex-end'
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          ARYUNA POSELENOVA
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          an aspiring{" "}
          <Link onClick={() => setReadMore(!readMore)} sx={{ cursor: 'pointer' }}>
            web developer
            {readMore ? " (less)" : ""}
          </Link>
        </Typography >
        {readMore && extraContent}
      </Grid>

      <Grid container size={{ md:5 }} justifyContent="center">
        <img src={profile} alt="profile" height="500" />
      </Grid>
    </Grid>
  );
};
