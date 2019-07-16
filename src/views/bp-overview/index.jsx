import React from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withFormik } from "formik";
import EdInput from "components/EdInput";

import CardRadio from "./component/card-radio";

import style from "./index.module.scss";

const groupData = [
    {
        title: "Summer / Winter School Programs",
        text:
            "Official accredited/non-accredited university programs conducted in the summer or winter school breaks. These programs usually last between 3-12 weeks with a variety of courses for students to choose from."
    },
    {
        title: "Short Study Tours / Visit Programs",
        text:
            "Official accredited/non-accredited university programs conducted in the summer or winter school breaks. These programs usually last between 3-12 weeks with a variety of courses for students to choose from."
    },
    {
        title: "Overseas Internship Programs",
        text:
            "Arranged internships in various countries done in partnership with start-ups, SMEs, NGOs, and other partnering organisations. These program may involve participants receiving an internship allowance/stipend. Length of programs vary from 3 weeks to 6 months."
    },
    {
        title: "Competitions / Conferences",
        text:
            "Tournaments, competitions and other international events for both international and local student participants. These programs include, but not limited to, debate competitions, mooting competitions, robotics, public speaking, tech exhibitions, etc."
    }
];

const BpOverview = props => {
    const { t } = useTranslation();
    const { values, handleSubmit, handleChange } = props;
    const { programType } = values;
    const renderCardGroup = groupData => {
        const arr = [];
        groupData.forEach((val, index) => {
            arr.push(
                <FormControlLabel
                    value={`${index}`}
                    control={
                        <CardRadio key={index}>
                            <h4 className={style.card_sub_title}>
                                {t(val.title)}
                            </h4>
                            <p
                                className={style.card_text}
                                style={{ paddingTop: 6 }}
                            >
                                {t(val.text)}
                            </p>
                        </CardRadio>
                    }
                />
            );
        });
        return arr;
    };

    const renderGeneralInfo = () => {
        return (
            <ul className={style.general_info_form}>
                <li>
                    <h4 className={style.card_sub_title}>
                        {t("Full Name of Program*")}
                    </h4>
                    <div>
                        <EdInput
                            style={{ width: "100%" }}
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                    </div>
                </li>
                <li>
                    <h4 className={style.card_sub_title}>
                        {t("University/Institution Name*")}
                    </h4>
                    <div>
                        <EdInput
                            style={{ width: "100%" }}
                            name="university"
                            value={values.university}
                            onChange={handleChange}
                        />
                    </div>
                </li>
                <li>
                    <h4 className={style.card_sub_title}>
                        {t("Department/Faculty Name")}
                    </h4>
                    <div>
                        <EdInput
                            style={{ width: "100%" }}
                            name="department"
                            value={values.department}
                            onChange={handleChange}
                        />
                    </div>
                </li>
                <li>
                    <span
                        style={{
                            float: "left",
                            width: "45%",
                            paddingRight: "10%"
                        }}
                    >
                        <h4 className={style.card_sub_title}>
                            {t("Country*")}
                        </h4>
                        <EdInput
                            style={{ width: "100%" }}
                            name="country"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                    </span>
                    <span style={{ float: "left", width: "45%" }}>
                        <h4 className={style.card_sub_title}>
                            {t("City/Region*")}
                        </h4>
                        <EdInput
                            style={{ width: "100%" }}
                            name="city"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                    </span>
                </li>
            </ul>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul className={style.main}>
                <li>
                    <Card>
                        <CardContent>
                            <h3 className={style.card_title}>
                                {t("Your program type")}
                            </h3>
                            <p
                                className={style.card_text}
                                style={{ padding: "10px 0 14px 0" }}
                            >
                                {t(
                                    "Choose the program type that best represents the nature of your study program. [Important note] An accurate representation of the program provides tailored areas of input for your content"
                                )}
                            </p>
                            <RadioGroup
                                name="programType"
                                value={programType}
                                onChange={handleChange}
                            >
                                {renderCardGroup(groupData)}
                            </RadioGroup>
                        </CardContent>
                    </Card>
                </li>
                <li>
                    <Card>
                        <CardContent>
                            <h3 className={style.card_title}>
                                {t("General Information")}
                            </h3>
                            <p
                                className={style.card_text}
                                style={{ padding: "10px 0 40px 0" }}
                            >
                                {t(
                                    "Lets begin with the basic introduction to what you’re about to offer."
                                )}
                            </p>
                            {renderGeneralInfo()}
                        </CardContent>
                    </Card>
                </li>
            </ul>
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
})(BpOverview);

export default withRouter(BpOverviewForm);
