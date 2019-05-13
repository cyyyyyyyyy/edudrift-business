import React from "react";
import Select from "react-select";

const customStyles = props => ({
    container: styles => ({ ...styles, display: "inline-block" }),
    control: styles => ({
        ...styles,
        backgroundColor: "white",
        width: props.width,
        border: "1px solid #000",
        fontSize:'14px'
    })
});

const EdSelect = props => {
    return (
        <Select
            {...props}
            styles={customStyles(props)}
            theme={theme => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    neutral15:'#000',
                    neutral20:'#000'
                },
                spacing: {
                    controlHeight: 30,
                    baseUnit:1,
                    menuGutter:2,
                }
            })}
        />
    );
};

export default EdSelect;
