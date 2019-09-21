import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const EdButton = withStyles({
  root: {
    padding: "3px 12px",
    borderRadius: "4px"
  },
  text: {
    backgroundColor: "#2C3250",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2C3250"
    }
  },
  outlined: {
    backgroundColor: "#fff",
    border: "1px solid #2C3250",
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  sizeSmall: {
    padding: "1px 10px"
  },
  sizeLarge: {
    padding: "5px 10px"
  }
})(Button);

export default EdButton;
