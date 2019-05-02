import React from "react";
import {
  Typography,
  withStyles,
  Button,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { Row, Col } from "react-styled-flexboxgrid";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "capitalize"
    }
  }
});

const styles = theme => ({
  root: {
    // paddingLeft: "100px"
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
                <Typography color="inherit">{climate}</Typography>
              </Button>
            </Col>
          ))}
        </Row>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Climate);
