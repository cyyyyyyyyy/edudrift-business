import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withFormik } from "formik";

import SchoolSchedule from "./school-schedule";

const BpSchedule = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <SchoolSchedule {...props} />
        </form>
    );
};

const BpScheduleForm = withFormik({
    mapPropsToValues: () => ({
        programType: "2",
        fullName: "",
        university: "",
        department: "",
        country: "",
        city: ""
    }),

    validate: values => {
        const errors = {};

        if (
            !values.fullName ||
            !values.university ||
            !values.department ||
            !values.country ||
            !values.city
        ) {
            errors.name = "Required";
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: "BasicForm"
})(BpSchedule);

export default withRouter(BpScheduleForm);
