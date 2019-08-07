import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { withFormik } from "formik";

import Accommodation from "./accommodation";

import style from "./index.module.scss";

const BpAccommodation = props => {
    const { t } = useTranslation();
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Accommodation {...props} />
        </form>
    );
};

const BpAccommodationForm = withFormik({
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
})(BpAccommodation);

export default withRouter(BpAccommodationForm);
