import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import BpRoute from "routes/bp-route";

import ellipseImg from "static/images/ellipse.png";

import style from "./index.module.scss";

const steps = [
    "Overview",
    "Program Details",
    "Schedule/Itinerary",
    "Highlights",
    "Academic Policies",
    "Eligibility",
    "Accommodation",
    "Registration Process"
];

const BpBasic = props => {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = index => {
        setActiveStep(index);
    };

    const renderStepper = () => {
        return (
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                    return (
                        <Step key={label} onClick={() => handleStep(index)}>
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
            <h3 className={style.name}>
                {t("Institution Name/Organisation Name")}
            </h3>
            <div className={style.main}>
                <aside className={style.aside}>
                    <h4 className={style["list-title"]}>
                        {t("Your Listing Progress")}
                    </h4>
                    {renderStepper()}
                </aside>
                <section className={style.content}>
                    <h4 className={style["list-title"]}>
                        {t("You’re getting started!")}
                    </h4>
                    <BpRoute />
                </section>
            </div>
        </React.Fragment>
    );
};

export default withRouter(BpBasic);
