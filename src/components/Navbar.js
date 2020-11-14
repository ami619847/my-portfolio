import React from "react";
import SimpleMenu from "./SimpleMenu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
              AP
            </Link>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <SimpleMenu />
          </IconButton>

       
        </Toolbar>
      </AppBar>
    </div>
  );
}
