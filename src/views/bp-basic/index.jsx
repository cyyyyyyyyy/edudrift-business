import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import BpRoute from "routes/bp-route";

import ellipseImg from "static/images/ellipse.png";

import style from "./index.module.scss";
import { withFormik } from "formik";

const steps = [
  { label: "Overview", value: "overview" },
  { label: "Program Details", value: "details" },
  { label: "Schedule/Itinerary", value: "schedule" },
  { label: "Highlights", value: "highlights" },
  { label: "Academic Policies", value: "academic" },
  { label: "Eligibility", value: "eligibility" },
  { label: "Accommodation", value: "accommodation" },
  { label: "Registration Process", value: "registration" }
];

const BpBasic = props => {
  const { history, handleSubmit } = props;
  const { location } = history;
  const { t } = useTranslation();
  const selectPath = location.pathname.split("/")[3];
  const [activeStep, setActiveStep] = useState(
    steps.findIndex(data => data.value === selectPath)
  );

  const handleStep = (index, value) => {
    handleSubmit();
    setActiveStep(index);
    history.push(`/business/program/${value}`);
  };

  const renderStepper = () => {
    return (
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((data, index) => {
          const { label, value } = data;
          return (
            <Step key={value} onClick={() => handleStep(index, value)}>
              <StepLabel>{t(label)}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  };
  return (
    <React.Fragment>
      <header className={style.header}>
        <img src={ellipseImg} />
        <p>{t("List your program")}</p>
      </header>
      <h3 className={style.name}>{t("Institution Name/Organisation Name")}</h3>
      <div className={style.main}>
        <aside className={style.aside}>
          <h4 className={style["list-title"]}>{t("Your Listing Progress")}</h4>
          {renderStepper()}
        </aside>
        <section className={style.content}>
          <h4 className={style["list-title"]}>
            {t("You’re getting started!")}
          </h4>
          <BpRoute {...props} />
        </section>
      </div>
    </React.Fragment>
  );
};

const BpProgramForm = withFormik({
  mapPropsToValues: () => ({
    overview_programType: "0",
    overview_full_name: "123123",
    overview_institution_name: "",
    overview_department_name: "",
    overview_country: "",
    overview_city: "",
    details_description: "",
    details_study_fields: [
      { label: "test1", value: "test1" },
      { label: "test2", value: "test2" }
    ],
    details_max_capacity: 0,
    details_institution_intro: "",
    details_institution_address: {
      line1: "",
      line2: "",
      code: "",
      position: []
    },
    details_nearest_airport: "",
    details_nearest_station: "",
    details_additional_instructions: "",
    details_program_websites: "",
    details_official_contact_email: "",
    details_primary_contact_number: "",
    details_secondary_contact_number: "",
    schedule_early_register: ""
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
  },

  displayName: "BasicForm"
})(BpBasic);

export default BpProgramForm;
