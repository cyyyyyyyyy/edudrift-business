import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EdInput from "components/EdInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import style from "./index.module.scss";

const SchoolAcademic = props => {
    const { t } = useTranslation();

    const renderGroup = () => {
        return (
            <RadioGroup aria-label="gender" name="gender1" row>
                <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Pass/Fail Grading"
                />
                <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Grade based"
                />
                <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Mix of Pass/Fail and Grade based"
                />
            </RadioGroup>
        );
    };

    const renderCheckbox = () => {
        return <div>12313</div>;
    };

    const renderSores = () => {
        const data = ["a", "b", "c", "d", "f"];
        const arr = [];
        data.forEach(val => {
            arr.push(
                <Grid key={val} item xs={2} style={{ marginRight: 20 }}>
                    <ul className={style.sores}>
                        <li>
                            <span>{`${val.toLocaleUpperCase()}+`}</span>
                            <EdInput style={{ width: 50 }} />
                        </li>
                        <li>
                            <span>{`${val.toLocaleUpperCase()}`}</span>
                            <EdInput style={{ width: 50 }} />
                        </li>
                        <li>
                            <span>{`${val.toLocaleUpperCase()}-`}</span>
                            <EdInput style={{ width: 50 }} />
                        </li>
                    </ul>
                </Grid>
            );
        });
        return <Grid container>{arr}</Grid>;
    };

    return (
        <React.Fragment>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Grading Policies")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "What are some certifications can students expect to receive at the end of the program? Please list the receivables that students can expect from the program. E.g. Participation certificates for all students, recommendation letters for top 10% students, scholorship opportunities for winning group. "
                        )}
                    </p>
                    <h4 className={style.card_sub_title}>
                        {t(
                            "Expected Grading System in the modules offered during the program"
                        )}
                    </h4>
                    {renderGroup()}
                    <h4 className={style.card_sub_title}>
                        {t("Description of Grading Policies")}
                    </h4>
                    {renderSores()}
                    <EdInput
                        rows={6}
                        placeholder={t(
                            "E.g. The grading system follows a bell-curve based on the performances of students within the selected course(s)."
                        )}
                        multiline
                        style={{ width: "100%", height: 120 }}
                    />
                </CardContent>
            </Card>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Course availability, changes and withdrawal")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "What are some certifications can students expect to receive at the end of the program? Please list the receivables that students can expect from the program. E.g. Participation certificates for all students, recommendation letters for top 10% students, scholorship opportunities for winning group. "
                        )}
                    </p>
                    <h4 className={style.card_sub_title}>
                        {t("Course Availability")}
                    </h4>
                    <EdInput
                        rows={6}
                        placeholder={t(
                            "E.g. The grading system follows a bell-curve based on the performances of students within the selected course(s)."
                        )}
                        multiline
                        style={{ width: "100%", height: 120 }}
                    />
                    <h4 className={style.card_sub_title}>
                        {t("Course Changes")}
                    </h4>
                    <EdInput
                        rows={6}
                        placeholder={t(
                            "E.g. The grading system follows a bell-curve based on the performances of students within the selected course(s)."
                        )}
                        multiline
                        style={{ width: "100%", height: 120 }}
                    />
                    <h4 className={style.card_sub_title}>
                        {t("Course Withdrawal")}
                    </h4>
                    <EdInput
                        rows={6}
                        placeholder={t(
                            "E.g. The grading system follows a bell-curve based on the performances of students within the selected course(s)."
                        )}
                        multiline
                        style={{ width: "100%", height: 120 }}
                    />
                </CardContent>
            </Card>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Program Withdrawal")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "If students choose to withdraw from the program before the graduation date, what are the policies involved?"
                        )}
                    </p>
                    <h4 className={style.card_sub_title}>
                        {t("Withdrawal from Program")}
                    </h4>
                    <EdInput
                        rows={6}
                        placeholder={t(
                            "E.g. The grading system follows a bell-curve based on the performances of students within the selected course(s)."
                        )}
                        multiline
                        style={{ width: "100%", height: 120 }}
                    />
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default SchoolAcademic;
