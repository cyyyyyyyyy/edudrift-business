import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withFormik } from "formik";

import SchoolAcademic from "./school-academic";

const BpAcademic = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <SchoolAcademic {...props} />
    </form>
  );
};

const BpAcademicForm = withFormik({
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
})(BpAcademic);

export default withRouter(BpAcademicForm);
