import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Search from "./Search";
import Title from "./Title";
import { Row, Col, Grid } from "react-styled-flexboxgrid";

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
            <Grid>
              <Row>
                <Col sm={4}>
                  <Title title={appbar.title} />
                </Col>
                <Col sm={3}>
                  <appbar.design.middle climates={appbar.climates} />
                </Col>
                <Col sm={2}>
                  <div className={classes.grow} />
                </Col>
                <Col sm={3}>
                  <Search />
                </Col>
              </Row>
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
