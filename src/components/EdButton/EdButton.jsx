import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const EdButton = withStyles({
    root: {
        padding: "3px 12px",
        borderRadius: "10px"
    },
    text: {
        backgroundColor: "#DD864B",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#DD864B"
        }
    },
    outlined: {
        backgroundColor: "#fff",
        border: "1px solid #000"
    },
    sizeSmall: {
        padding: "1px 10px"
    },
    sizeLarge: {}
})(Button);

export default EdButton;
