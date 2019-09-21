import React from "react";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/icons/AddCircleRounded";

import style from "./index.module.scss";
import { Grid } from "@material-ui/core";
import EdDatePick from "components/EdDatePick";
import EdSelect from "components/EdSelect";
import EdInput from "components/EdInput";
import FormList from "../bp-schedule/form-list";
import EdImageCrop from "components/EdImageCrop";

const SchoolHighlights = props => {
  const { t } = useTranslation();

  const handleImportantDate = (label, data) => {};

  const renderCoursesInList = (data, index, handleChange) => {
    return <EdInput style={{ width: "100%", marginBottom: 8 }} key={index} />;
  };

  const renderCoursesList = (data, index, handleChange) => {
    return (
      <Grid container className={style.list_border} key={index}>
        <Grid item xs={5}>
          <p className={style.card_text}>
            {t("Area of Study/Course Department")}
          </p>
          <p className={style.card_text}>{t("Courses offered")}</p>
        </Grid>
        <Grid item xs={7}>
          <FormList
            render={renderCoursesInList}
            onChange={handleImportantDate}
            addButton={renderAddButton}
          />
        </Grid>
      </Grid>
    );
  };

  const renderInformationList = (data, index, handleChange) => {
    return <EdInput style={{ width: "100%", marginBottom: 8 }} key={index} />;
  };

  const renderActivitiesList = (data, index, handleChange) => {
    return (
      <Grid container className={style.list_border} key={index}>
        <Grid item xs={3}>
          <EdImageCrop />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={5}>
              {t("Title")}
            </Grid>
            <Grid item xs={7}>
              <EdInput style={{ width: "100%", marginBottom: 14 }} />
            </Grid>
            <Grid item xs={5}>
              {t("Nature of Activity")}
            </Grid>
            <Grid item xs={7}>
              <EdInput style={{ width: "100%", marginBottom: 14 }} />
            </Grid>
            <Grid item xs={5}>
              {t("Location")}
            </Grid>
            <Grid item xs={7}>
              <EdInput style={{ width: "100%", marginBottom: 14 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderAddButton = handleAdd => {
    return (
      <div
        style={{ padding: "6px 0", cursor: "pointer" }}
        onClick={() => {
          handleAdd({});
        }}
      >
        <Icon style={{ verticalAlign: "middle" }} />
        <span style={{ padding: "0 0 0 10px" }}>
          {t("Add another line item")}
        </span>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Course Highlights!")}</h3>
          <p className={style.card_text}>
            {t(
              "Are the lectures discussion based? Are there guest lectures from esteemed speakers? How are courses evaluated? List the strengths and highlights of your program."
            )}
          </p>
          <h4 className={style.card_sub_title}>{t("Courses Available")}</h4>
          <Grid container className={style.list_border}>
            <Grid item xs={5}>
              <p className={style.card_text}>
                {t("Area of Study/Course Department")}
              </p>
              <p className={style.card_text}>{t("Courses offered")}</p>
            </Grid>
            <Grid item xs={7}>
              <p className={style.card_text}>{t("BUSINESS AND ECONOMICS")}</p>
              <p className={style.card_text}>{t("Financial Management")}</p>
              <p className={style.card_text}>{t("Global Economic Issues")}</p>
              <p className={style.card_text}>{t("International Trade")}</p>
              <p className={style.card_text}>{t("Macroeconomics")}</p>
              <p className={style.card_text}>
                {t("Principles of Accounting Information")}
              </p>
            </Grid>
          </Grid>
          <FormList
            render={renderCoursesList}
            onChange={handleImportantDate}
            addButton={renderAddButton}
          />
        </CardContent>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>
            {t("Additional Course Information")}
          </h3>
          <p className={style.card_text}>
            {t(
              "What are some certifications can students expect to receive at the end of the program? Please list the receivables that students can expect from the program. E.g. Participation certificates for all students, recommendation letters for top 10% students, scholorship opportunities for winning group. "
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t(
              "Course restrictions, requirements and other information relating to specific courses"
            )}
          </h4>
          <FormList
            render={renderInformationList}
            onChange={handleImportantDate}
            addButton={renderAddButton}
          />
        </CardContent>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Co-Curricular Activities")}</h3>
          <p className={style.card_text}>
            {t(
              "Where will students go after classes? If you’re organising activities for the participants, please include them here. You can list up to 6 co-curricular activities planned in the program. Activities may be subjected to changes, however you are to inform the participants if there are changes to the ones listed."
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t("Upload photos and their respective activity names")}
          </h4>
          <FormList
            render={renderActivitiesList}
            onChange={handleImportantDate}
            addButton={renderAddButton}
          />
          <h4 className={style.card_sub_title}>
            {t("General description of the all the planned activities ")}
          </h4>
          <EdInput
            rows={6}
            placeholder={t(
              "[Exchange students] Students applying to Ewha ISC through the appropriate division of their home university."
            )}
            multiline
            style={{ width: "100%", height: 120 }}
          />
        </CardContent>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>
            {t("Student Life in this University")}
          </h3>
          <p className={style.card_text}>
            {t(
              "Where will students go after classes? If you’re organising activities for the participants, please include them here. You can list up to 6 co-curricular activities planned in the program. Activities may be subjected to changes, however you are to inform the participants if there are changes to the ones listed."
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t("Upload photos and their respective activity names")}
          </h4>
          <FormList
            render={renderActivitiesList}
            onChange={handleImportantDate}
            addButton={renderAddButton}
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SchoolHighlights;
