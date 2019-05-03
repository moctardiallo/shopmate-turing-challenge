import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Search from "./Search";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  }
});

function SearchAppBar(props) {
  const { classes } = props;
  const { appbar } = props;
  appbar.title.design = appbar.design.title;
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={appbar.design.theme}>
        <AppBar position="static">
          <Toolbar>
            <Grid container>
              <Grid item sm={4}>
                <Title title={appbar.title} />
              </Grid>
              <Grid item sm={3}>
                <appbar.design.middle climates={appbar.climates} />
              </Grid>
              <Grid item sm={2}>
                <div className={classes.grow} />
              </Grid>
              <Grid item sm={3}>
                <Search />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
