import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

const EdInput = withStyles({
    root: {
        height: "28px",
        border: "1px solid #000",
        borderRadius: "6px",
        backgroundColor: "#fff",
    },
    input: {
        padding: "0 4px 0 4px",
        borderRadius: "10px",
    },
    error: {
        border: "1px solid red"
    }
})(InputBase);

export default EdInput;
