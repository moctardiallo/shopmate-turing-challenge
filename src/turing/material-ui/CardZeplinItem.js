import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import Bag from "./images-bag.png";

function CardZeplinItem() {
  return (
    <div>
      <Card>
        <CardHeader title="CardZeplinItem" />
        <CardMedia image={Bag} />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardZeplinItem;
