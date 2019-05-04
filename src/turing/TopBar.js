import React from "react";
import { Grid } from "@material-ui/core";

function TopBar() {
  return (
    <Grid container>
      <Grid item sm={2}>
        Hi! SignIn or Register
      </Grid>
      <Grid item sm={3} />
      <Grid item sm={3}>
        Daily Sells - Sell - Help & Contact
      </Grid>
      <Grid item sm={2} />
      <Grid item sm={2}>
        Your Bag: $0.00
      </Grid>
    </Grid>
  );
}

export default TopBar;
