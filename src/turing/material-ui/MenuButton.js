import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

function MenuButton(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Open drawer"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default withStyles(styles)(MenuButton);
