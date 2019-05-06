import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";

import EdButton from "components/EdButton";

import { addGroupAccounts } from "request/accounts";

import { renderFrom, selectList } from "./user-accounts-add";

import style from "./user-accounts-add.module.scss";

const inputList = t => [
    { name: t("Email Address"), key: "email", type: "tags" },
    { name: t("Password"), key: "password", type: "input" }
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
                        {renderFrom(inputList(t), this.props)}
                    </ul>
                    <h2 className={style.title}>{t("Account Status")}</h2>
                    <ul className={style.from}>
                        {renderFrom(selectList(t), this.props)}
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
    handleSubmit: async (values, { props }) => {
        const { success } = await addGroupAccounts(values);
        if (success) {
            props.history.push("/user-accounts");
        }
    },
    displayName: "BasicForm"
})(UserAccountsGroupAdd);
