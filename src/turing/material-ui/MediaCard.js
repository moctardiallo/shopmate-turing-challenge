import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import ImagesBag from "../turing-uiux/Zeplin/Images/images-bag.png";

const styles = {
  card: {
    // maxWidth: 345
  },
  media: {
    height: 140
  }
};

const item = {
  title: "Bag",
  image: ImagesBag,
  description:
    "Lizards are a widespread group of squamate " +
    "reptiles, with over 6,000 species, ranging across all " +
    "continents except Antarctica"
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader title={item.title} />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">{item.description} </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
