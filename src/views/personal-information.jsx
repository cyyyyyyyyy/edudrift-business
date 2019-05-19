import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";

import { renderFrom } from "./render-form";
import EdEditorAvatar from "components/EdEditorAvatar";
import countries from "utils/countries";
import { education_stage, gender } from "utils/select-options";

import style from "./personal-information.module.scss";

const formList = t => [
    {
        name: t("Givenname as per passport"),
        key: "given_name",
        type: "input",
        edit: true
    },
    {
        name: t("Surname as per passport"),
        key: "surname",
        type: "input",
        edit: true
    },
    { name: t("Nickname/Alias"), key: "nickname", type: "input", edit: true },
    {
        name: t("Stage of Education"),
        key: "education_stage",
        type: "select",
        options: education_stage(t),
        edit: true
    },
    {
        name: t("Full Name of Institution"),
        key: "institution_full_name",
        type: "input",
        edit: true
    },
    {
        name: t("Short Name of Institution"),
        key: "institution_short_name",
        type: "input",
        edit: true
    },
    {
        name: t("Gender"),
        key: "gender",
        type: "select",
        options: gender(t),
        edit: true
    },
    { name: t("Birthday"), key: "birthday", type: "date", edit: true },
    {
        name: t("Nationality"),
        key: "nationality",
        type: "select",
        options: countries,
        edit: true
    },
    {
        name: t("Passport Issuing Country"),
        key: "passport_issuing_country",
        type: "select",
        options: countries,
        edit: true
    }
];
const formList2 = t => [
    {
        name: t("Secondary Email Address"),
        key: "secondary_email",
        type: "input",
        edit: true
    },
    { name: t("Mobile Number"), key: "mobile", type: "input", edit: true },
    { name: t("WhatsApp Contact"), key: "whatsApp", type: "input", edit: true },
    {
        name: t("WeChat Contact"),
        key: "WeChat",
        type: "input",
        edit: true
    },
    {
        name: t("Kakao Contact"),
        key: "Kakao",
        type: "input",
        edit: true
    },
    {
        name: t("LINE Contact"),
        key: "LINE",
        type: "input",
        edit: true
    },
    {
        name: t("Emergency Contact Person"),
        key: "emergency_person",
        type: "input",
        edit: true
    },
    {
        name: t("Emergency Contact Number"),
        key: "emergency_number",
        type: "date",
        edit: true
    }
];

const formList3 = t => [
    {
        name: t("Dietary Restrictions"),
        key: "dietary",
        type: "input",
        edit: true
    },
    {
        name: t("Accessibility Constraints"),
        key: "accessibility",
        type: "input",
        edit: true
    }
];

@withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
        const {} = props;
        return {};
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setSubmitting, props }) => {},
    displayName: "BasicForm"
})
@withI18n()
class PersonalInformation extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <form style={{ paddingBottom: 50 }}>
                <h1 className={style.title}>
                    {t(
                        "Fill In Your Personal Information to Complete Signing Up for EduDrift"
                    )}
                </h1>
                <ul className={style.from}>
                    {renderFrom(formList(t), this.props)}
                    <li style={{ position: "absolute", right: 120, top: 80 }}>
                        <EdEditorAvatar />
                    </li>
                </ul>
                <ul className={style.from}>
                    {renderFrom(formList2(t), this.props)}
                </ul>
                <ul className={style.from}>
                    {renderFrom(formList3(t), this.props)}
                </ul>
            </form>
        );
    }
}

export default PersonalInformation;
