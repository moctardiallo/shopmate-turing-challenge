import React from "react";
import SearchAppBar from "./turing/SearchAppBar";

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
      <SearchAppBar appbar={data.searchAppBar} />
    </div>
  );
}

export default Shopmate;
