import React from "react";
import Logobar from "./Logobar";
import Categories from "./Categories";
import CategoriesPagination from "./CategoriesPagination";
import CategoryItems from "./CategoryItems";
import { Grid } from "@material-ui/core";

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
      <Grid container>
        <Grid item sm={3}>
          <Categories />
        </Grid>
        <Grid item sm={9} container direction="column" alignItems="center">
          <CategoriesPagination />
          <CategoryItems />
        </Grid>
      </Grid>
    </div>
  );
}

export default Shopmate;
