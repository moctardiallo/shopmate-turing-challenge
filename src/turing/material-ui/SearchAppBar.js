import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Search from "./Search";
import Title from "./Title";

const styles = theme => ({
  root: {
    width: "100%"
  },
  middle: {
    paddingLeft: theme.spacing.unit * 32
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
            <Title title={appbar.title} />
            <div className={classes.middle}>
              <appbar.design.middle climates={appbar.climates} />
            </div>
            <div className={classes.grow} />
            <Search />
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
