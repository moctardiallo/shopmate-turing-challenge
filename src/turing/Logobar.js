import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import SearchAppBar from "./material-ui/SearchAppBar";
import Climate from "./Climate";

const design = {
  theme: createMuiTheme({
    palette: {
      primary: {
        main: "#0b0000"
      }
    }
  }),
  middle: Climate,
  title: {
    color: "secondary"
  }
};

function Logobar(props) {
  const { appbar } = props;
  appbar.design = design;
  return (
    <div>
      <SearchAppBar appbar={appbar} />
    </div>
  );
}

export default Logobar;
