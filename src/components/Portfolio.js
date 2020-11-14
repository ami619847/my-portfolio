import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { devData, uxData} from "../files/portfolio_data";
// import profile from "../files/about_profile.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 400,
    width: 800,
    transform: "translateZ(0)",
  },
  card: {
    maxWidth: 345,
  },
}));

export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>

      <Typography variant="h5" gutterBottom>
        User Experience Projects
      </Typography>

      <div className={classes.root}>  
        <GridList cellHeight={280} cols={3} spacing={5} className={classes.gridList}>
          {uxData.map((project) => (
            <GridListTile 
              key={project.img} 
              cols={project.featured ? 2 : 1} 
              rows={project.featured ? 2 : 1}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.title} 
                    height="140"
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.description}. <Link href="#">See more</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    See code
                  </Button>
                </CardActions> */}
              </Card>  
            </GridListTile>
          ))}
        </GridList>
      </div>

      <Typography variant="h5" gutterBottom>
        Web Development Projects
      </Typography>

      <div className={classes.root}>        
        <GridList cellHeight={280} cols={3} spacing={5} className={classes.gridList}>
          {devData.map((project) => (
            <GridListTile 
              key={project.img} 
              cols={project.featured ? 2 : 1} 
              rows={project.featured ? 2 : 1}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.title} 
                    height="140"
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.description}. <Link href={ project.url } target="_blank">See code</Link>
                    </Typography>
                    {/* <Divider variant="inset"/>
                    {project.technology} */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>

    </div>
  );
}
