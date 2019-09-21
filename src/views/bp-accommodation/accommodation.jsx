import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EdInput from "components/EdInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import EdImageCrop from "components/EdImageCrop";
import FormList from "../bp-schedule/form-list";

import style from "./index.module.scss";
import Icon from "@material-ui/core/SvgIcon/SvgIcon";

const programRadios = [
  {
    label: "Yes. Accommodation is included in the registration package.",
    value: 1
  },
  {
    label:
      "No. Participants will make their own accommodation arrangements. We have a few recommendations.",
    value: 2
  },
  {
    label:
      "Optional. This program has accommodation options available upon request.",
    value: 3
  }
];

const typeRadios = [
  {
    label:
      "Hotel (5 Star Hotel) *In case the above hotel is unavailable, an alternative of equivalent standard will be arranged",
    value: 1
  },
  {
    label:
      "Hotel (4 Star Hotel) *In case the above hotel is unavailable, an alternative of equivalent standard will be arranged",
    value: 2
  },
  {
    label:
      "Hotel (3 Star Hotel) *In case the above hotel is unavailable, an alternative of equivalent standard will be arranged",
    value: 3
  },
  {
    label: "Student Dormitory/Hostel (Common bathroom facilities)",
    value: 4
  },
  {
    label: "Student Dormitory/Hostel (Attached bathroom facilities)",
    value: 5
  },
  {
    label: "Serviced Apartment/Condominium",
    value: 6
  }
];

const breakfastRadios = [
  {
    label: "Yes",
    value: 1
  },
  {
    label: "no",
    value: 2
  }
];

const providedRadios = [
  {
    label: "Yes, Both ways. (Scheduled)",
    value: 1
  },
  {
    label: "Only for arrival. (Scheduled)",
    value: 2
  },
  {
    label: "Only for departure. (Scheduled)",
    value: 3
  },
  {
    label:
      "No, airport transfers will not be provided. Participants will have to find their own way to the accommodation.",
    value: 4
  }
];

const roomRadios = [
  {
    label: "Single Room (Not shared)",
    value: 1
  },
  {
    label: "Double/Twin Rooms",
    value: 2
  },
  {
    label: "Triple Rooms",
    value: 1
  },
  {
    label: "Mix of Double/Twin/Triple Rooms",
    value: 2
  },
  {
    label: "Three or more roommates in one room",
    value: 2
  }
];

const Accommodation = () => {
  const { t } = useTranslation();

  const handleImportantDate = (label, data) => {};

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

  const renderGroup = (data, row) => {
    const arr = [];
    data.forEach(val => {
      arr.push(
        <FormControlLabel
          key={val.value}
          value={val.value}
          control={<Radio />}
          label={t(val.label)}
        />
      );
    });
    return (
      <RadioGroup aria-label="gender" name="gender1" row={row}>
        {arr}
      </RadioGroup>
    );
  };

  const renderPhotosList = (data, index, handleChange) => {
    return (
      <Grid item xs={3}>
        <EdImageCrop />{" "}
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Accommodation (General)")}</h3>
          <p className={style.card_text}>
            {t(
              "Participants traveling abroad for overseas program are most concerned about the accommodation arrangements. Do input the information for the length of their stay in the program."
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t("Will you be providing accommodation as part of this program?")}
          </h4>
          {renderGroup(programRadios)}
        </CardContent>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Accommodation Details")}</h3>
          <p className={style.card_text}>
            {t(
              "Participants will be interested to know the hotel/hostel they will be staying at. For programs that are not providing accommodation, your most recommended accommodation option will be very helpful for foreigners who are new to the area."
            )}
          </p>
          <h4 className={style.card_sub_title}>{t("Accommodation Name")}</h4>
          <h4 className={style.card_sub_title}>
            {t("Address of Accommodation")}
          </h4>
          <h4 className={style.card_sub_title}>
            {t("Address of Accommodation")}
          </h4>
          <h4 className={style.card_sub_title}>{t("Accommodation Type")}</h4>
          {renderGroup(typeRadios)}
          <h4 className={style.card_sub_title}>
            {t("Is breakfast provided?")}
          </h4>
          {renderGroup(breakfastRadios, true)}
          <h4 className={style.card_sub_title}>
            {t(
              "Will airport transfer on arrival and departure day be provided?"
            )}
          </h4>
          {renderGroup(providedRadios, true)}
          <h4 className={style.card_sub_title}>
            {t("Room Type/Bed Arrangement")}
          </h4>
          {renderGroup(roomRadios)}
        </CardContent>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <CardContent>
          <h3 className={style.card_title}>{t("Accommodation (Photos)")}</h3>
          <p className={style.card_text}>
            {t(
              "Upload photos of the designated accommodation so as to give participants a better idea of where they will be staying at and what to expect in the accommodation!"
            )}
          </p>
          <h4 className={style.card_sub_title}>
            {t(
              "Upload photos of the organising team and/or photos of previous programs"
            )}
          </h4>
          <Grid container>
            <FormList
              render={renderPhotosList}
              onChange={handleImportantDate}
              addButton={renderAddButton}
            />
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Accommodation;
