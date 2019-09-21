import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EdInput from "components/EdInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";

import style from "./index.module.scss";
import CardRadio from "../bp-overview/component/card-radio";
import Checkbox from "@material-ui/core/Checkbox";

const SchoolEligibility = props => {
  const { t } = useTranslation();

  const renderCardRadio = () => {
    return (
      <RadioGroup name="programType">
        <FormControlLabel
          control={
            <CardRadio>
              <h4 className={style.card_sub_title}>
                {t("No Additional Age Restrictions")}
              </h4>
              <p className={style.card_text}>
                {t(
                  "As long as participants are within the suggested Education Level/Academic Profile, they are allowed to participate in this program. If they have recently graduated from their respective academic institutions, they will still be able to participate."
                )}
              </p>
            </CardRadio>
          }
        />
        <FormControlLabel
          control={
            <CardRadio>
              <h4 className={style.card_sub_title}>
                {t("Restricted Age Group")}
              </h4>
              <p className={style.card_text}>
                {t(
                  "As part of the program policy, there are age restrictions. Participants whose individual profiles do not meet these requirements will not be able to successful register for the program. The maximum and/or minimum age requirements are as follow"
                )}
              </p>
              <p className={style.card_text}>
                <span
                  style={{
                    width: 430,
                    display: "inline-block"
                  }}
                >
                  {t(
                    "Minimum age：  Participants must be born before or in the year"
                  )}
                </span>
                <EdInput />
              </p>
              <p className={style.card_text}>
                <span
                  style={{
                    width: 430,
                    display: "inline-block"
                  }}
                >
                  {t("Maximum age：  Participants must be born after the year")}
                </span>
                <EdInput />
              </p>
            </CardRadio>
          }
        />
      </RadioGroup>
    );
  };

  const renderGroup = () => {
    return (
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No. The above information is sufficient."
        />
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes. The program requires the following additional information:"
        />
      </RadioGroup>
    );
  };

  const renderCheckbox = () => {
    const data = [
      { label: "Academic Transcript", value: 1 },
      { label: "Scanned Copy of Passport", value: 2 },
      { label: "Dietary Restriction(s)", value: 3 },
      { label: "Others:", value: 4 }
    ];
    const arr = [];
    data.forEach(val => {
      arr.push(
        <FormControlLabel
          value={val.value}
          control={<Checkbox color="primary" />}
          label={val.label}
        />
      );
    });
    return (
      <FormGroup style={{ paddingLeft: 40 }}>
        {arr}
        <EdInput
          placeholder={t("Passed CFA")}
          style={{ width: "100%", marginBottom: 8 }}
        />
        <EdInput
          placeholder={t("Passed CFA")}
          style={{ width: "100%", marginBottom: 8 }}
        />
      </FormGroup>
    );
  };

  return (
    <React.Fragment>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Eligibility")}</h3>
          <p className={style.card_text}>
            {t(
              "Let us know who this program is most suitable for and the minimum academic background required for meaningful participation."
            )}
          </p>
          <h4 className={style.card_sub_title}>{t("Language Proficiency")}</h4>
          <p className={style.card_sub_text}>
            {t(
              "The entire program will be conducted in this language. Course information, medium of instructions in classes and examinatinations will all be conducted in this langauge. Students are expected to be proficient in this language before applying to participate in this program."
            )}
          </p>
          <Grid container>
            <Grid item xs={6}>
              {t("Language required")}
            </Grid>
            <Grid item xs={6}>
              <EdInput style={{ width: "100%" }} />
            </Grid>
          </Grid>
          <h4 className={style.card_sub_title}>
            {t("Education Level/Academic Profile")}
          </h4>
          <p className={style.card_sub_text}>
            {t(
              "Select up to 3 most relevant profile that best fits the program. Note that if you select multiple groups, there is a very high likelyhood that these participant from different academic profiles will register and be in the same program."
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t("Age Restrictions (if any)")}
          </h4>
          {renderCardRadio()}
          <h4 className={style.card_sub_title}>
            {t("Other Eligibility Requirements (if any)")}
          </h4>
          <EdInput
            placeholder={t("IELTS 6.5 or equivalent")}
            style={{ width: "100%", marginBottom: 8 }}
          />
          <EdInput
            placeholder={t("Undergraduate degree in Psychology")}
            style={{ width: "100%", marginBottom: 8 }}
          />
          <EdInput
            placeholder={t("Passed CFA")}
            style={{ width: "100%", marginBottom: 8 }}
          />
          <EdInput
            placeholder={t("A minimum GPA of 3.5 and above")}
            style={{ width: "100%", marginBottom: 8 }}
          />
          <EdInput
            placeholder={t("Student Visa or Alien Registration Card")}
            style={{ width: "100%", marginBottom: 8 }}
          />
        </CardContent>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>
            {t("Additional Participant Information Required")}
          </h3>
          <p className={style.card_text}>
            {t(
              "Information of the participants that you may require for successful registration."
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t("Basic Information Provided")}
          </h4>
          <p className={style.card_sub_text}>
            {t(
              "Every profile on EduDrift will contain the following information of the participant:"
            )}
          </p>
          <p className={style.card_text}>{t("- Full name as per passport")}</p>
          <p className={style.card_text}>{t("- Current stage of education")}</p>
          <p className={style.card_text}>{t("- Gender - Date of birth")}</p>
          <p className={style.card_text}>
            {t("- Nationality and passport issuing country")}
          </p>
          <p className={style.card_text}>
            {t("- Mobile number and email address")}
          </p>
          <p className={style.card_text}>
            {t("- Emergency contact person and number")}
          </p>
          <h4 className={style.card_sub_title}>
            {t("Does this program require additional information?")}
          </h4>
          {renderGroup()}
          {renderCheckbox()}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SchoolEligibility;
