import React, {useState} from "react";
import profile from "../files/photo.jpg";
import javascript from "../files/javascript-logo.png";
import reactLogo from "../files/react-logo.png";
import typescript from "../files/typescript-logo.png";
// import graphql from "../files/graphql-logo.png";
// import resume from "https://docs.google.com/document/d/12R5rQBu4exuYe87AMzrY2e3lQKXF-2_ztP53n20lHsM/edit?usp=sharing";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function About() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = 
    <Typography variant="h5" align="right" color="textSecondary" paragraph>
      with more than one year of professional experience.
      <br/>
      Dedicated to creating minimalist web experiences
      <br/>
      focused on user-oriented design, simplicity and functionality.
      <br/>
        <img src={reactLogo} alt="react-logo" height="28" />
        <img src={javascript} alt="javascript-logo" height="30" /> 
        <img src={typescript}  alt="typescript-logo" height="30" />
        {/* <img src={graphql} height="30" /> */}
      <br/>
      Please take a look at my <Link
        href="https://drive.google.com/file/d/1pe3edGqbG9mzy-Tu9KVOedt0ZAdxEKyc/view?usp=sharing" 
        without rel="noopener noreferrer" 
        target="_blank"
      >resume</Link>.
    </Typography>
  
  return (
    <Grid container>
      <Grid 
        container 
        item 
        md={7}
        alignItems='center' 
        justify='flex-end'
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          ARYUNA POSELENOVA 
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          an aspiring&nbsp;
          <Link onClick={ () => {setReadMore(!readMore)} }>
            web developer
            { readMore ? " (less)" : "" }
          </Link>
        </Typography >
        { readMore && extraContent }
      </Grid>

      <Grid container item md={5} justify="center">
        <img src={profile} alt="profile" height="500" />
      </Grid>
    </Grid>
  );
};
