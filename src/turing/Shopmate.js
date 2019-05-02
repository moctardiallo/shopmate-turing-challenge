import React from "react";
import Logobar from "./Logobar";

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
    </div>
  );
}

export default Shopmate;
