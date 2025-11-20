import React from 'react';
import Project from "./Project"; 
import { data } from "../files/portfolio_data";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Portfolio() {
  return (
    <Container sx={{ pt: 8, pb: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {data.map((project) => (
          <Grid item key={project.title} xs={12} sm={6} md={4}>
            <Project project={project}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};
