import React from "react";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
          key={val.title}
          value={`${index}`}
          control={
            <CardRadio key={index}>
              <h4 className={style.card_sub_title}>{t(val.title)}</h4>
              <p className={style.card_text}>{t(val.text)}</p>
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
          <h4 className={style.card_sub_title}>{t("Full Name of Program*")}</h4>
          <div>
            <EdInput
              style={{ width: "100%" }}
              name="overview_full_name"
              value={values.overview_full_name}
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
              name="overview_institution_name"
              value={values.overview_institution_name}
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
              name="overview_department_name"
              value={values.overview_department_name}
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
            <h4 className={style.card_sub_title}>{t("Country*")}</h4>
            <EdInput
              style={{ width: "100%" }}
              name="overview_country"
              value={values.overview_country}
              onChange={handleChange}
            />
          </span>
          <span style={{ float: "left", width: "45%" }}>
            <h4 className={style.card_sub_title}>{t("City/Region*")}</h4>
            <EdInput
              style={{ width: "100%" }}
              name="overview_city"
              value={values.overview_city}
              onChange={handleChange}
            />
          </span>
        </li>
      </ul>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Your program type")}</h3>
          <p className={style.card_text}>
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
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("General Information")}</h3>
          <p className={style.card_text}>
            {t(
              "Lets begin with the basic introduction to what you’re about to offer."
            )}
          </p>
          {renderGeneralInfo()}
        </CardContent>
      </Card>
    </form>
  );
};

export default BpOverview;
