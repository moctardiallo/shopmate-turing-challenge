import React from "react";
import { Grid, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Register from "./Register";
import SignIn from "./SignIn";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "capitalize"
    }
  }
});

function TopBar() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <Grid item container justify="flex-start" sm={4}>
          <span style={{ marginLeft: "20px" }}>
            <span>Hi!</span>
            <span>
              <SignIn />
            </span>
            or
            <Register />
          </span>
        </Grid>
        <Grid item container justify="center" alignItems="center" sm={4}>
          <span>
            <span style={{ margin: "10px" }}>Daily Sells</span>
            <span style={{ margin: "10px" }}>Sell</span>
            <span style={{ margin: "10px" }}>Help & Contact</span>
          </span>
        </Grid>
        <Grid item container justify="flex-end" alignItems="center" sm={4}>
          <div style={{ marginRight: "10px" }}>
            Your Bag:{" "}
            <span style={{ color: theme.palette.secondary.main }}>$0.00</span>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default TopBar;
