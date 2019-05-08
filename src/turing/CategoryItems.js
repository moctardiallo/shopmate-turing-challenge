import React from "react";
import MediaCard from "./material-ui/MediaCard";
import { Grid, withStyles, Button } from "@material-ui/core";
import items from "./CategoryItemsData";
import SimpleDialog from "./material-ui/SimpleDialog";

const styles = {
  root: {
    paddingRight: "40px",
    paddingLeft: "10px"
  }
};

const emails = ["username@gmail.com", "user02@gmail.com"];

function CategoryItems(props) {
  const { classes } = props;
  var category = props.match.params.category;

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Grid className={classes.root} container direction="row" spacing={16}>
      {items
        .filter(item => item.categories.includes(category))
        .map(item => (
          <Grid item sm={3}>
            <Button onClick={handleClickOpen}>
              <MediaCard item={item} />
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default withStyles(styles)(CategoryItems);
