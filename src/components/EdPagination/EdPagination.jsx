import React from "react";
import Pagination from "material-ui-flat-pagination";
import { withStyles } from "@material-ui/core/styles";

const EdPagination = withStyles({
    textPrimary: {
        color: "#fff",
        backgroundColor: "#DD864B",
        margin: "0 2px"
    },
    disabled: {
        color: "#fff !important"
    },
    textSecondary: {
        color: "#000"
    }
})(Pagination);

export default EdPagination;
