import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ChipInput from "material-ui-chip-input";

const EdSelectTagsStyle = withStyles({
    root: {
        border: "1px solid #000",
        borderRadius: 10,
        width: "400px",
        display: "inline-block",
        backgroundColor: "#fff"
    },
    underline: {
        "&:before": {
            display: "none"
        },
        "&:hover:not($disabled):before": {
            display: "none"
        },
        "&$disabled:before": {
            display: "none"
        }
    },
    inkbar: {
        "&:after": {
            display: "none"
        }
    },
    chip: {
        background: "#fff",
        animation: "none"
    }
})(ChipInput);

class EdSelectTags extends React.Component {
    chip(data, key) {
        return (
            <span
                key={key}
                style={{
                    display: "inline-block",
                    height: 14,
                    lineHeight: "14px",
                    padding: "4px 6px",
                    fontSize: "14px"
                }}
            >
                {data.text}
                <i
                    onClick={data.handleDelete}
                    style={{
                        display: "inline-block",
                        padding: " 0 0 0 6px",
                        fontSize: "14px",
                        color: "red",
                        cursor:'pointer'
                    }}
                >
                    X
                </i>
            </span>
        );
    }

    render() {
        return <EdSelectTagsStyle chipRenderer={this.chip} {...this.props} />;
    }
}

export default EdSelectTags;
