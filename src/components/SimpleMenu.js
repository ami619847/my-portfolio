import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button> */}

      <IconButton
        // edge="start"
        // className={classes.menuButton}
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/" color="inherit">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href="/about" color="inherit">
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link href="/portfolio" color="inherit">
          <MenuItem onClick={handleClose}>Portfolio</MenuItem>
        </Link>
        <Link href="/contact" color="inherit">
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
