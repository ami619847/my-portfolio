import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#ffffff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    textTransform: 'none',
  },
});

export default function Project(props) {
  const classes = useStyles();
  const project = props.project

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {project.technology}
          {/* {project.type} */}
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          {project.title}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          {project.technology}
        </Typography> */}
        <Typography variant="body2" component="p">
          {project.description}
        </Typography>
        { project.image ? <Link href={project.url} target="_blank">
          <CardMedia
            component="img"
            alt={project.title} 
            height="100"
            image={project.image}
            title={project.title} 
          />
        </Link> : null }
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button 
          className={classes.button} 
          size="small" 
          href={project.url} 
          target="_blank" 
          endIcon={<GitHubIcon />}
        >
          View Code
        </Button>
      </CardActions>
    </Card>
  );
};
