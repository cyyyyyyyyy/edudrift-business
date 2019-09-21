import React from "react";
import _ from "lodash";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import EdInput from "components/EdInput";
import EdImageCrop from "components/EdImageCrop";

import style from "./index.module.scss";

export const RenderHostCard = props => {
  const { t } = useTranslation();
  const { values, handleChange, setFieldValue } = props;

  const handleAddressChange = value => {
    setFieldValue("details_institution_address", value);
  };

  const renderCampusPhotos = () => {
    const data = [0, 1, 2, 3, 4];
    const arr = [];

    data.forEach((value, index) => {
      arr.push(
        <Grid key={value} item sm={"auto"} style={{ paddingRight: 16 }}>
          <EdImageCrop />
        </Grid>
      );
    });

    return (
      <Grid container spacing={0}>
        {arr}
      </Grid>
    );
  };
  return (
    <Card style={{ marginTop: 30 }}>
      <CardContent>
        <h3 className={style.card_title}>
          {t("Introduce the Host Institution/University")}
        </h3>
        <p className={style.card_text}>
          {t(
            "Institutions are often known for their academic standings and achievements, the facilities they have on campus and also the experience they have in providing unique educational experience. This offers participants an idea of what to expect when attending a program at this institution."
          )}
        </p>
        <h4 className={style.card_sub_title}>{t("Institution Name")}</h4>
        <p className={style.card_text}>{t("Ewha Womans University")}</p>
        <p className={style.card_text}>{t("International Summer College")}</p>
        <Grid container spacing={0}>
          <Grid item sm={9}>
            <h4 className={style.card_sub_title}>
              {t("Brief Introduction of the Institution/University")}
            </h4>
            <EdInput
              rows={6}
              placeholder={t(
                "A brief background to the university and its merits. You may include the university’s specialisation, academic standing, recent development, its facilities, culture, vision and mission. [Max 1000 characters]"
              )}
              onChange={handleChange}
              value={values["details_institution_intro"]}
              name="details_institution_intro"
              multiline
              style={{ width: "100%", height: 105 }}
            />
          </Grid>
          <Grid item xs={3} style={{ paddingLeft: 40 }}>
            <h4 className={style.card_sub_title}>{t("Institution Logo")}</h4>
            <EdImageCrop />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item sm={9}>
            <h4 className={style.card_sub_title}>
              {t("Address of Institution/University")}
            </h4>
            <EdInput
              value={values["details_institution_address"].line1}
              onChange={e =>
                handleAddressChange({
                  ...values["details_institution_address"],
                  line1: e.target.value
                })
              }
              placeholder={t("Address Line 01")}
              style={{ width: "100%", marginBottom: 16 }}
            />
            <EdInput
              value={values["details_institution_address"].line2}
              placeholder={t("Address Line 02")}
              style={{ width: "100%", marginBottom: 16 }}
              onChange={e =>
                handleAddressChange({
                  ...values["details_institution_address"],
                  line2: e.target.value
                })
              }
            />
            <EdInput
              value={values["details_institution_postal_code"]}
              name="details_institution_postal_code"
              placeholder={t("Postal Code")}
              style={{ width: "100%" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} style={{ paddingLeft: 40 }}>
            <h4 className={style.card_sub_title}>{t("Institution Logo")}</h4>
          </Grid>
        </Grid>
        <h4 className={style.card_sub_title}>
          {t("Institution/University Campus Photos")}
        </h4>
        {renderCampusPhotos()}
        <h4 className={style.card_sub_title}>{t("Getting there")}</h4>
        <Grid container style={{ paddingBottom: 10 }}>
          <Grid item xs={6}>
            {t("Nearest International Airport*")}
          </Grid>
          <Grid item xs={6}>
            <EdInput
              style={{ width: "100%" }}
              name="details_nearest_airport"
              value={values["details_nearest_airport"]}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container style={{ paddingBottom: 10 }}>
          <Grid item xs={6}>
            {t("Nearest Subway Station*")}
          </Grid>
          <Grid item xs={6}>
            <EdInput
              style={{ width: "100%" }}
              name="details_nearest_station"
              value={values["details_nearest_station"]}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container style={{ paddingBottom: 10 }}>
          <Grid item xs={6}>
            {t("Additional Instructions (if any)")}
          </Grid>
          <Grid item xs={6}>
            <EdInput
              style={{ width: "100%" }}
              name="details_additional_instructions"
              value={values["details_additional_instructions"]}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const renderInterestCheckbox = (options, values, setFieldValue, key) => {
  const arr = [];
  const selectValue = values[key];

  options.forEach(data => {
    const checked = !!_.find(selectValue, data);
    arr.push(
      <Grid item xs={4} key={data.value}>
        <FormControlLabel
          control={
            <Checkbox
              value={data.value}
              color="primary"
              checked={checked}
              onChange={e => {
                const flag = e.target.checked;
                let value = [];
                if (flag) {
                  value = [...selectValue, data];
                } else {
                  value = _.differenceWith(selectValue, [data], _.isEqual);
                }
                setFieldValue(key, value);
              }}
            />
          }
          label={data.label}
        />
      </Grid>
    );
  });
  return (
    <Grid container spacing={0}>
      {arr}
    </Grid>
  );
};

const SchoolDetails = props => {
  const { t } = useTranslation();
  const { values, handleChange, setFieldValue } = props;

  const interestData = [
    { label: "Area Studies", value: 1 },
    { label: "Arts & Design", value: 2 },
    { label: "Business & Economics", value: 3 },
    { label: "Computer Sciences", value: 4 },
    { label: "Humanities", value: 5 },
    { label: "Language", value: 6 },
    { label: "Law", value: 7 },
    { label: "Mathematics", value: 8 },
    { label: "Medicine", value: 9 },
    { label: "Science & Engineering", value: 10 },
    { label: "Social Sciences", value: 11 },
    { label: "Field of Interest", value: 12 }
  ];

  return (
    <React.Fragment>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Introduce your program")}</h3>
          <p className={style.card_text}>
            {t(
              "Whether the program is going to take place for the first time or have had multiple editions over the years, participants will be keen to know more about it!"
            )}
          </p>
          <h4 className={style.card_sub_title}>{t("Program Name")}</h4>
          <p className={style.card_text}>
            {t("Ewha International Summer College")}
          </p>
          <h4 className={style.card_sub_title}>{t("Program Description")}</h4>
          <EdInput
            rows={6}
            placeholder={t(
              "A write-up about the history of the program, its unique selling point, the objectives and aims of the the program that are valuable for the development of the participants taking part in it. [Max 1000 characters]"
            )}
            onChange={handleChange}
            name="details_description"
            value={values["details_description"]}
            multiline
            style={{ width: "100%", height: 120 }}
          />
          <h4 className={style.card_sub_title}>
            {t("Related Fields of Interest")}
          </h4>
          <p className={style.card_sub_text}>
            {t(
              "Select all the relevant fields of interest that best represents the program."
            )}
          </p>
          {renderInterestCheckbox(
            interestData,
            values,
            setFieldValue,
            "details_study_fields"
          )}
          <h4 className={style.card_sub_title}>
            {t("Maximum Capacity")}
            <EdInput
              onChange={handleChange}
              name="details_max_capacity"
              value={values["details_max_capacity"]}
              style={{ width: 80, margin: "0 15px 0 40px" }}
            />
            <span className={style.card_text}>{t("Participants")}</span>
          </h4>
        </CardContent>
      </Card>
      <RenderHostCard {...props} />
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>
            {t("Program Contact Information")}
          </h3>
          <p className={style.card_text}>
            {t(
              "Institutions should provide their contact information. This allows participants to direct possible queries to the appropriate representatives. "
            )}
          </p>
          <Grid container style={{ paddingBottom: 10 }}>
            <Grid item xs={4}>
              {t("Program Website")}
            </Grid>
            <Grid item xs={8}>
              <EdInput
                style={{ width: "100%" }}
                name="details_program_websites"
                value={values["details_program_websites"]}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container style={{ paddingBottom: 10 }}>
            <Grid item xs={4}>
              {t("Official Contact Email")}
            </Grid>
            <Grid item xs={8}>
              <EdInput
                style={{ width: "100%" }}
                name="details_official_contact_email"
                value={values["details_official_contact_email"]}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container style={{ paddingBottom: 10 }}>
            <Grid item xs={4}>
              {t("Primary Contact Number")}
            </Grid>
            <Grid item xs={8}>
              <EdInput
                style={{ width: "100%" }}
                name="details_primary_contact_number"
                value={values["details_primary_contact_number"]}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container style={{ paddingBottom: 10 }}>
            <Grid item xs={4}>
              {t("Secondary Contact Number*")}
            </Grid>
            <Grid item xs={8}>
              <EdInput
                style={{ width: "100%" }}
                name="details_secondary_contact_number"
                value={values["details_secondary_contact_number"]}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SchoolDetails;
