import React from "react";

import Shopmate from "./turing/Shopmate";

import { HashRouter } from "react-router-dom";

function App(props) {
  return (
    <HashRouter>
      <Shopmate />
    </HashRouter>
  );
}

export default App;
