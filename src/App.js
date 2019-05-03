import React from "react";

import Shopmate from "./turing/Shopmate";

import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Shopmate />
    </BrowserRouter>
  );
}

export default App;
