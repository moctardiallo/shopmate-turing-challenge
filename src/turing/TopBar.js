import React from "react";
import { Grid } from "@material-ui/core";

function TopBar() {
  return (
    <Grid container>
      <Grid item sm={2}>
        <div style={{ marginLeft: "20px" }}>Hi! SignIn or Register</div>
      </Grid>
      <Grid item sm={3} />
      <Grid item sm={3}>
        Daily Sells - Sell - Help & Contact
      </Grid>
      <Grid item sm={2} />
      <Grid item container justify="flex-end" sm={2}>
        <div style={{ marginRight: "10px" }}>Your Bag: $0.00</div>
      </Grid>
    </Grid>
  );
}

export default TopBar;
