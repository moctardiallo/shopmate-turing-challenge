import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import UseSearchAppBar from "../mui-demos/SearchAppBar";
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

function SearchAppBar(props) {
  const { appbar } = props;
  appbar.design = design;
  return (
    <div>
      <UseSearchAppBar appbar={appbar} />
    </div>
  );
}

export default SearchAppBar;
