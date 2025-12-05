import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';

export default function Project({ project }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#ffffff', }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {project.technology}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" component="p">
          {project.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
        {project.image ? <Link href={project.url} target="_blank">
          <CardMedia
            component="img"
            alt={project.title}
            height="100"
            image={project.image}
            title={project.title}
            sx={{ mt: 2 }}
          />
        </Link> : null}
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {project.type === "Case Study" ? <Button
          component={RouterLink}
          to={project.url}
          sx={{ textTransform: 'none' }}
        >
          View Case Study
        </Button> : <Button
          size="small"
          href={project.url}
          target="_blank"
          endIcon={<GitHubIcon />}
          sx={{ textTransform: 'none' }}
        >
          View Code
        </Button>
        }
      </CardActions>
    </Card>
  );
};
