import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.scss";

const EdDatePick = props => {
  return <DatePicker {...props} width={299} />;
};
export default EdDatePick;
