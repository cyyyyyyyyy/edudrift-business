import React from "react";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import Icon from "@material-ui/icons/AddCircleRounded";

import FormList from "./form-list";

import EdInput from "components/EdInput";
import EdSelect from "components/EdSelect";
import EdDatePick from "components/EdDatePick";

import style from "./index.module.scss";

const SchoolSchedule = props => {
    const { t } = useTranslation();

    const handleImportantDate = (label, data) => {};

    const renderImportantDateList = (data, index, handleChange) => {
        return (
            <Grid container key={index} style={{ paddingTop: 8 }}>
                <Grid item xs={4}>
                    <EdDatePick selected={data.date} />
                </Grid>
                <Grid item xs={8}>
                    <EdInput
                        style={{ width: "100%" }}
                        onChange={e => {
                            handleChange(
                                { ...data, value: e.target.value },
                                index
                            );
                        }}
                    />
                </Grid>
            </Grid>
        );
    };

    const renderInformationList = (data, index, handleChange) => {
        return (
            <EdInput
                key={index}
                style={{ width: "100%", marginTop: 8 }}
                onChange={e => {
                    handleChange({ ...data, value: e.target.value }, index);
                }}
            />
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

    const renderActivities = (data, index, handleChange) => {
        return (
            <Grid container key={index} style={{ paddingTop: 8 }}>
                <Grid item xs={8} style={{ paddingRight: 20 }}>
                    <EdInput
                        style={{ width: "100%" }}
                        onChange={e => {
                            handleChange(
                                { ...data, value: e.target.value },
                                index
                            );
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <EdDatePick selected={data.date} />
                </Grid>
            </Grid>
        );
    };

    return (
        <React.Fragment>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Registration/Application Dates")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "Set the expected date you would like to receive the applications from participants interested in your program. Note that the dates and their corresponding registration fees will be reflected on the EduDrift website."
                        )}
                    </p>
                    <h4 className={style.card_sub_title}>
                        {t(
                            "Early Registration Deadline (Early Bird) for Online Application"
                        )}
                    </h4>
                    <p className={style.card_text}>
                        {t(
                            "Programs usually have a registration with a discounted fee for early registration"
                        )}
                    </p>
                    <Grid container style={{ paddingTop: 10 }}>
                        <Grid item xs={2}>
                            {t("Register by")}
                        </Grid>
                        <Grid item xs={3}>
                            <EdDatePick />
                        </Grid>
                        <Grid item xs={2}>
                            {t("Program Fee")}
                        </Grid>
                        <Grid item xs={2}>
                            <EdSelect width={100} />
                        </Grid>
                        <Grid item xs={3}>
                            <EdInput />
                        </Grid>
                    </Grid>
                    <h4 className={style.card_sub_title}>
                        {t(
                            "Standard Registration Deadline for Online Application"
                        )}
                    </h4>
                    <p className={style.card_text}>
                        {t(
                            "The standardised deadline to process all applications."
                        )}
                    </p>
                    <Grid container style={{ paddingTop: 10 }}>
                        <Grid item xs={2}>
                            {t("Register by")}
                        </Grid>
                        <Grid item xs={3}>
                            <EdDatePick />
                        </Grid>
                        <Grid item xs={2}>
                            {t("Program Fee")}
                        </Grid>
                        <Grid item xs={2}>
                            <EdSelect width={100} />
                        </Grid>
                        <Grid item xs={3}>
                            <EdInput />
                        </Grid>
                    </Grid>
                    <h4 className={style.card_sub_title}>
                        {t("Late Registration Deadline for Online Application")}
                    </h4>
                    <p className={style.card_text}>
                        {t(
                            "Some programs offer an extended deadline with an increase in program fees for participants who want to participate at the last minute. If you would like to offer an extended deadline, do also specify the additional registration fee to be included. "
                        )}
                    </p>
                    <Grid container style={{ paddingTop: 10 }}>
                        <Grid item xs={2}>
                            {t("Register by")}
                        </Grid>
                        <Grid item xs={3}>
                            <EdDatePick />
                        </Grid>
                        <Grid item xs={2}>
                            {t("Program Fee")}
                        </Grid>
                        <Grid item xs={2}>
                            <EdSelect width={100} />
                        </Grid>
                        <Grid item xs={3}>
                            <EdInput />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Other Important Dates")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "Other than registration deadlines, participants may need to know the dates for their various obligations, preparations and other events that may be relevant to this program"
                        )}
                    </p>
                    <FormList
                        label=""
                        render={renderImportantDateList}
                        onChange={handleImportantDate}
                        addButton={renderAddButton}
                    />
                </CardContent>
            </Card>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Program Schedule")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "The complete rundown of your summer/winter program"
                        )}
                    </p>
                    <Grid container>
                        <Grid item xs={2}>
                            {t("Start Date")}
                        </Grid>
                        <Grid item xs={3}>
                            <EdDatePick />
                        </Grid>
                    </Grid>
                    <Grid container style={{ paddingTop: 8 }}>
                        <Grid item xs={2}>
                            {t("End Date")}
                        </Grid>
                        <Grid item xs={3}>
                            <EdDatePick />
                        </Grid>
                        <Grid item xs={5}>
                            <p className={style.card_text}>
                                {t(
                                    "Participants should arrive before this date"
                                )}
                            </p>
                        </Grid>
                    </Grid>
                    <h4 className={style.card_sub_title}>
                        {t("Monthly Schedule of Expected Activities")}
                    </h4>
                    <Grid container style={{ padding: "8px 0" }}>
                        <Grid item xs={8}>
                            {t("Important Activities")}
                        </Grid>
                        <Grid item xs={4}>
                            {t("Date")}
                        </Grid>
                    </Grid>
                    <FormList
                        label=""
                        render={renderActivities}
                        onChange={handleImportantDate}
                        addButton={renderAddButton}
                    />
                </CardContent>
            </Card>
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <h3 className={style.card_title}>
                        {t("Other Schedule Information")}
                    </h3>
                    <p className={style.card_text}>
                        {t(
                            "Having a finalised schedule allows for participants to search and pick programs that fits. It also helps with the planning of flights, travel and other arrangements to allow faster decisions on participation."
                        )}
                    </p>
                    <FormList
                        label=""
                        render={renderInformationList}
                        onChange={handleImportantDate}
                        addButton={renderAddButton}
                    />
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default SchoolSchedule;
