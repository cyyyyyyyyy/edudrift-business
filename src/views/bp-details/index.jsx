import React, { useState } from "react";
import { withFormik } from "formik";
import SchoolDetails from "./school-details";

const BpDetails = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <SchoolDetails {...props} />
        </form>
    );
};

const BpOverviewForm = withFormik({
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
})(BpDetails);

export default BpOverviewForm;
