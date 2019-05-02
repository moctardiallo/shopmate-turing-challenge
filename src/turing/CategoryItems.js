import React from "react";
import MediaCard from "./material-ui/MediaCard";
import { Grid, withStyles } from "@material-ui/core";
import ImagesBag from "./turing-uiux/Zeplin/Images/images-bag.png";

const styles = {
  root: {
    paddingRight: "40px",
    paddingLeft: "10px"
  }
};

const items = [
  {
    title: "Bag",
    image: ImagesBag,
    description: "Lizards are a widespread group of squamate "
  },
  {
    title: "Bag",
    image: ImagesBag,
    description: "Lizards are a widespread group of squamate "
  },
  {
    title: "Bag",
    image: ImagesBag,
    description: "Lizards are a widespread group of squamate "
  },
  {
    title: "Bag",
    image: ImagesBag,
    description: "Lizards are a widespread group of squamate "
  }
];

function CategoryItems(props) {
  const { classes } = props;
  return (
    <Grid className={classes.root} container direction="row" spacing={16}>
      {items.map(item => (
        <Grid item sm={3}>
          <MediaCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(CategoryItems);
