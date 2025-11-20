import React from "react";
import Grid from "@mui/material/Grid"; 
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Contact() {
  return (
    <Grid container sx={{ mt: 8 }}>
      <Grid item xs={12} md={7}></Grid>

      <Grid item xs={12} md={5} container justifyContent="flex-end" alignItems="center" sx={{ width: "90%" }}>
        <Typography
          variant="h6" 
          color="textSecondary"
          sx={{ lineHeight: 1.6 }}
        >
          For any inquiries regarding my work,
          <br />
          please{" "}
          <Link href="mailto:aryunaposel@gmail.com?subject=Mail%20from%20the%20website">
            send me an email
          </Link>
          .
        </Typography>
      </Grid>
    </Grid>
  );
}
