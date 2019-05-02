import React from "react";
import MediaCard from "./material-ui/MediaCard";
import { Grid, withStyles } from "@material-ui/core";
import ImagesShirt1 from "./turing-uiux/Zeplin/Images/images-shirt1.png";
import ImagesShirt2 from "./turing-uiux/Zeplin/Images/images-shirt2.png";
import ImagesShirt3 from "./turing-uiux/Zeplin/Images/images-shirt3.png";
import ImagesShirt4 from "./turing-uiux/Zeplin/Images/images-shirt4.png";
import ImagesShirt5 from "./turing-uiux/Zeplin/Images/images-shirt5.png";
import ImagesShirt6 from "./turing-uiux/Zeplin/Images/images-shirt6.png";
import ImagesShirt7 from "./turing-uiux/Zeplin/Images/images-shirt7.png";
import ImagesShirt8 from "./turing-uiux/Zeplin/Images/images-shirt8.png";
import ImagesShirt9 from "./turing-uiux/Zeplin/Images/images-shirt9.png";
import ImagesShirt10 from "./turing-uiux/Zeplin/Images/images-shirt10.png";
import ImagesShirt11 from "./turing-uiux/Zeplin/Images/images-shirt11.png";
import ImagesShirt12 from "./turing-uiux/Zeplin/Images/images-shirt12.png";
import ImagesShirt13 from "./turing-uiux/Zeplin/Images/images-shirt13.png";
import ImagesShirt14 from "./turing-uiux/Zeplin/Images/images-shirt14.png";
import ImagesShirt15 from "./turing-uiux/Zeplin/Images/images-shirt15.png";
import ImagesShirt16 from "./turing-uiux/Zeplin/Images/images-shirt16.png";
import ImagesShirt17 from "./turing-uiux/Zeplin/Images/images-shirt17.png";

const styles = {
  root: {
    paddingRight: "40px",
    paddingLeft: "10px"
  }
};

const items = [
  {
    title: "Arc Triomphe",
    image: ImagesShirt1,
    description: "This beautiful and iconic T-shirt will no doubt... ",
    price: "$14.99"
  },
  {
    title: "Chartres Cathedrales",
    image: ImagesShirt2,
    description: "Lizards are a widespread group of squamate ",
    price: "$15.95"
  },
  {
    title: "Coat of Arms",
    image: ImagesShirt3,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.50"
  },

  {
    title: "Gallick Cock",
    image: ImagesShirt4,
    description: "Lizards are a widespread group of squamate ",
    price: "$16.99"
  },
  {
    title: "Marianne",
    image: ImagesShirt5,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.95"
  },
  {
    title: "Alsace",
    image: ImagesShirt6,
    description: "Lizards are a widespread group of squamate ",
    price: "$16.50"
  },
  {
    title: "Apocalypse Tapestry",
    image: ImagesShirt7,
    description: "Lizards are a widespread group of squamate ",
    price: "$18.95"
  },
  {
    title: "Centeur",
    image: ImagesShirt8,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.95"
  },
  {
    title: "T-shirt 9",
    image: ImagesShirt9,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.99"
  },
  {
    title: "T-shirt 10",
    image: ImagesShirt10,
    description: "Lizards are a widespread group of squamate ",
    price: "$15.95"
  },
  {
    title: "T-shirt 11",
    image: ImagesShirt11,
    description: "Lizards are a widespread group of squamate ",
    price: "$16.50"
  },
  {
    title: "T-shirt 12",
    image: ImagesShirt12,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.99"
  },
  {
    title: "T-shirt 13",
    image: ImagesShirt13,
    description: "Lizards are a widespread group of squamate ",
    price: "$15.95"
  },
  {
    title: "T-shirt 14",
    image: ImagesShirt14,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.95"
  },
  {
    title: "T-shirt 15",
    image: ImagesShirt15,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.99"
  },
  {
    title: "T-shirt 16",
    image: ImagesShirt16,
    description: "Lizards are a widespread group of squamate ",
    price: "$18.95"
  },
  {
    title: "T-shirt 17",
    image: ImagesShirt17,
    description: "Lizards are a widespread group of squamate ",
    price: "$14.99"
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
