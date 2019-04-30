import React from "react";
import { withStyles, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  title: {
    color: "inherit"
  }
});

function Title(props) {
  const { classes, title } = props;
  return (
    <Button>
      <Typography
        className={classes.root}
        variant="h6"
        color={title.design.color}
        noWrap
      >
        {title.data}
      </Typography>
    </Button>
  );
}

export default withStyles(styles)(Title);
