import React from "react";
import { withTranslation } from "react-i18next";
import { withFormik } from "formik";
import cookie from "js-cookie";

import EdEditorAvatar from "components/EdEditorAvatar";
import Button from "components/EdButton";

import { renderFrom } from "views/render-form";
import countries from "utils/countries";
import { education_stage, gender } from "utils/select-options";
import { updateClients } from "request/accounts";

import style from "./style.module.scss";

const formList = (t, edit) => [
  {
    name: t("Givenname as per passport"),
    key: "given_name",
    type: "input",
    edit
  },
  { name: t("Surname as per passport"), key: "surname", type: "input", edit },
  { name: t("Nickname/Alias"), key: "nickname", type: "input", edit },
  {
    name: t("Stage of Education"),
    key: "education_stage",
    type: "select",
    options: education_stage(t),
    edit
  },
  {
    name: t("Full Name of Institution"),
    key: "institution_full_name",
    type: "input",
    edit
  },
  {
    name: t("Short Name of Institution"),
    key: "institution_short_name",
    type: "input",
    edit
  },
  {
    name: t("Gender"),
    key: "gender",
    type: "select",
    options: gender(t),
    edit
  },
  { name: t("Birthday"), key: "birthday", type: "date", edit },
  {
    name: t("Nationality"),
    key: "nationality",
    type: "select",
    options: countries,
    edit
  },
  {
    name: t("Passport Issuing Country"),
    key: "passport_issuing_country",
    type: "select",
    options: countries,
    edit
  }
];

@withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => {
    const { data } = props;

    return {
      ...data
    };
  },
  validate: (values, props) => {
    let errors = {};
    return {};
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    await updateClients(cookie.get("userId"), values);
  },
  displayName: "BasicForm"
})
@withTranslation()
class UserProfile extends React.Component {
  state = {
    edit: false
  };

  handleEdit() {
    const { handleSubmit } = this.props;
    const { edit } = this.state;
    this.setState({
      edit: !edit
    });
    if (edit) {
      handleSubmit();
    }
  }

  render() {
    const { t } = this.props;
    const { edit } = this.state;
    return (
      <form style={{ position: "relative" }}>
        <ul className={style.from}>
          {renderFrom(formList(t, edit), this.props)}
        </ul>
        <div style={{ position: "absolute", right: 120, top: 80 }}>
          <EdEditorAvatar />
        </div>
        <Button onClick={this.handleEdit.bind(this)}>
          {!edit ? "Edit" : "Save"}
        </Button>
      </form>
    );
  }
}

export default UserProfile;
