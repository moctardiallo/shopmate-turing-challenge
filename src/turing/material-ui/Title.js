import React from "react";
import { withStyles, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
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
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          className={classes.root}
          variant="h6"
          color={title.design.color}
          noWrap
        >
          {title.data}
        </Typography>
      </Link>
    </Button>
  );
}

export default withStyles(styles)(Title);
