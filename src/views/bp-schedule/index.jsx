import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withFormik } from "formik";

import SchoolSchedule from "./school-schedule";

const BpSchedule = props => {
    return <SchoolSchedule {...props} />;
};

export default BpSchedule;
