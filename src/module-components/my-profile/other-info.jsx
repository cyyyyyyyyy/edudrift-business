import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";

import { renderFrom } from "views/render-form";
import style from "./style.module.scss";

const formList = t => [
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
        const { data } = props;
        return { ...data };
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setSubmitting, props }) => {},
    displayName: "BasicForm"
})
@withI18n()
class OtherInfo extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <form>
                <ul className={style.from}>
                    {renderFrom(formList(t), this.props)}
                </ul>
            </form>
        );
    }
}

export default OtherInfo;
