import React from "react";
import { withI18n } from "react-i18next";

import style from "./user-accounts-add.module.scss";
import { withFormik } from "formik";
import { accountsChangePassword } from "../request/accounts";
import queryString from "query-string";
import EdButton from "../components/EdButton";
import {renderFrom} from "./render-from";

const inputList = (t, disabled) => [
    { name: t("Email Address"), key: "email", type: "input" },
    { name: t("Password"), key: "password", type: "input", disabled: disabled }
];

@withI18n()
class UserAccountsChangePassword extends React.Component {
    render() {
        const { t, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h2 className={style.title}>{t("Change Password")}</h2>
                <ul className={style.from}>
                    {renderFrom(inputList(t), this.props)}
                </ul>
                <EdButton type="submit">{t("Save Change")}</EdButton>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: props => {
        const { email } = queryString.parse(props.location.search);
        return {
            email: email
        };
    },
    validate: values => {
        return {};
    },
    handleSubmit: async (values, { props }) => {
        const { userId } = queryString.parse(props.location.search);
        const { success } = await accountsChangePassword(
            userId,
            values.password
        );
        if (success) {
            props.history.push("/user-accounts");
        }
    },
    displayName: "BasicForm"
})(UserAccountsChangePassword);
