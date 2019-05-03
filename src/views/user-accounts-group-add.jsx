import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";

import EdButton from "components/EdButton";

import { renderFrom, selectList } from "./user-accounts-add";

import style from "./user-accounts-add.module.scss";

const inputList = [
    { name: "Email Address", key: "email", type: "tags" },
    { name: "Password", key: "password", type: "input" }
];

@withI18n()
class UserAccountsGroupAdd extends React.Component {
    render() {
        const { t, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className={style.title}>{t("Account and Password")}</h2>
                    <ul className={style.from}>
                        {renderFrom(inputList, this.props)}
                    </ul>
                    <h2 className={style.title}>{t("Account Status")}</h2>
                    <ul className={style.from}>
                        {renderFrom(selectList, this.props)}
                    </ul>
                    <EdButton type="submit">
                        {t("Add Users and Download Password")}
                    </EdButton>
                </div>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: props => {
        const { user, edit } = props;
        let data = {};
        if (edit) {
            data = { ...user };
        }
        return data;
    },
    validate: values => {
        return {};
    },
    handleSubmit: (values) => {
        console.log(values);
    },
    displayName: "BasicForm"
})(UserAccountsGroupAdd);
