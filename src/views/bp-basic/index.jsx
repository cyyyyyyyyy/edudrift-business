import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import BpRoute from "routes/bp-route";

import ellipseImg from "static/images/ellipse.png";

import style from "./index.module.scss";

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
    const { history } = props;
    const { location } = history;
    const { t } = useTranslation();
    const selectPath = location.pathname.split("/")[3];
    const [activeStep, setActiveStep] = useState(
        steps.findIndex(data => data.value === selectPath)
    );

    const handleStep = (index, value) => {
        setActiveStep(index);
        history.push(`/business/program/${value}`);
    };

    const renderStepper = () => {
        return (
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((data, index) => {
                    const { label, value } = data;
                    return (
                        <Step
                            key={value}
                            onClick={() => handleStep(index, value)}
                        >
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
