import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.scss";

const EdDatePick = props => {
    return <DatePicker style={{ width: 400, height: 30 }} {...props} />;
};
export default EdDatePick;
