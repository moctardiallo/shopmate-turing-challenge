import React from "react";
import MediaCard from "./material-ui/MediaCard";
import { Grid, withStyles } from "@material-ui/core";
import items from "./CategoryItemsData";
import Category from "./Category";
import { Link } from "react-router-dom";

const styles = {
  root: {
    paddingRight: "40px",
    paddingLeft: "10px"
  }
};

function CategoryItems(props) {
  const { classes } = props;
  var category = props.location.pathname.split("/")[1];
  return (
    <Grid className={classes.root} container direction="row" spacing={16}>
      {items
        .filter(item => item.categories.includes(category))
        .map(item => (
          <Grid item sm={3}>
            <Link to={"/items/" + item.title}>
              <MediaCard item={item} />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}

export default withStyles(styles)(CategoryItems);
