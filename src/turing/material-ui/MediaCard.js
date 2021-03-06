import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const styles = {
  card: {
    // maxWidth: 345
  },
  media: {
    height: 140
  },
  price: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff"
  },
  old_price: {
    textDecoration: "line-through"
  }
};

function MediaCard(props) {
  const {
    classes,
    item,
    handleclickOpen,
    open,
    setOpen,
    selectedValue,
    setSelectedValue
  } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Card onClick={handleclickOpen} className={classes.card} elevation={1}>
        <CardHeader
          title={item.title}
          titleTypographyProps={{ variant: "body1" }}
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Grid container>
              <Grid item sm={3}>
                <Button color="secondary" className={classes.old_price}>
                  {item.old_price}
                </Button>
              </Grid>
              <Grid item sm={4} />
              <Grid item sm={3}>
                <Button size="small" className={classes.price}>
                  {item.price}
                </Button>
              </Grid>
              <Grid item sm={2} />
            </Grid>
            <Typography component="p">{item.description} </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </MuiThemeProvider>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
