import React from "react";
import {
  withStyles,
  Button,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { Row, Col } from "react-styled-flexboxgrid";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "capitalize"
    }
  }
});

const styles = theme => ({
  root: {},
  climate: {
    textDecoration: "none",
    color: "#ffffff"
  }
});

function Climate(props) {
  const { classes, climates } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Row>
          {climates.map(climate => (
            <Col sm={4}>
              <Button color="inherit">
                <Link
                  to={"/" + climate.toLowerCase()}
                  className={classes.climate}
                >
                  {climate}
                </Link>
              </Button>
            </Col>
          ))}
        </Row>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Climate);
