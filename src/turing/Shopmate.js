import React from "react";
import Logobar from "./Logobar";
import Categories from "./Categories";
import CategoriesPagination from "./CategoriesPagination";
import CategoryItems from "./CategoryItems";
import { Grid, Paper } from "@material-ui/core";
import { Route } from "react-router-dom";

const data = {
  searchAppBar: {
    title: {
      data: "SHOPMATE"
    },
    climates: ["Regional", "Nature", "Seasonal"]
  }
};

function Shopmate() {
  return (
    <div>
      <Logobar appbar={data.searchAppBar} />
      <Paper>
        <Grid container>
          <Grid item sm={3}>
            <Categories />
          </Grid>
          <Grid item sm={9} container direction="column" alignItems="center">
            <CategoriesPagination />
            <Route exact path="/" component={CategoryItems} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Shopmate;
