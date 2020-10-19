import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
// import tileData from "./tileData";
import Typography from "@material-ui/core/Typography";
import profile from "../images/about_profile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>
      <div className={classes.root}>
        {/* <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 3 : 2}
            rows={tile.featured ? 3 : 2}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>s
        ))}
      </GridList> */}

        <GridList spacing={3} className={classes.gridList} cols={3}>
          <GridListTile>
            <img src={profile} alt="about_profile" />
            <GridListTileBar
              title="project 1"
              titlePosition="bottom"
              // actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
          <GridListTile>
            <img src={profile} alt="about_profile" />
            <GridListTileBar
              title="project 2"
              titlePosition="bottom"
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
          <GridListTile>
            <img src={profile} alt="about_profile" />
            <GridListTileBar
              title="project 3"
              titlePosition="bottom"
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
          <GridListTile>
            <img src={profile} alt="about_profile" />
            <GridListTileBar
              title="project 4"
              titlePosition="bottom"
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
}
