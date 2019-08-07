import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withFormik } from "formik";

import SchoolEligibility from "./school-eligibility";

import style from "./index.module.scss";

const BpEligibility = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <SchoolEligibility {...props} />
        </form>
    );
};

const BpEligibilityForm = withFormik({
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
})(BpEligibility);

export default withRouter(BpEligibilityForm);
