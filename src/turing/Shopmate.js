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
      <Paper elevation={0}>
        <Grid container>
          <Grid item sm={3}>
            <Categories />
          </Grid>
          <Grid item sm={9} container direction="column" alignItems="center">
            <CategoriesPagination />
            <Route exact path="/" component={CategoryItems} />
            <Route path="/french" component={CategoryItems} />
            <Route path="/italian" component={CategoryItems} />
            <Route path="/irish" component={CategoryItems} />
            <Route path="/animal" component={CategoryItems} />
            <Route path="/flower" component={CategoryItems} />
            <Route path="/christmas" component={CategoryItems} />
            <Route path="/valentine's" component={CategoryItems} />
            <Route path="/regional" component={CategoryItems} />
            <Route path="/seasonal" component={CategoryItems} />
            <Route path="/nature" component={CategoryItems} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Shopmate;
