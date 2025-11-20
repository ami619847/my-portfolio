import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: 3,
        bottom: 0,
        position: 'sticky'
      }}
    >
      <Grid container>
        <Grid size={{ md:7 }}></Grid>
        <Grid
          container
          size = {{ md:5 }}
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
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
            <Link style={{ textDecoration: 'none' }} href="mailto:aryunaposel@gmail.com?subject=Mail%20from%20the%20website" >
              <EmailIcon />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
