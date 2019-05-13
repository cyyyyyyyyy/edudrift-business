import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";

import EdButton from "components/EdButton";

import { addGroupAccounts, groupAccountsEdit } from "request/accounts";

import { selectList } from "./user-accounts-add";

import style from "./user-accounts-add.module.scss";
import { renderFrom } from "./render-from";

const inputList = (t, disabled) =>
    !disabled
        ? [
              { name: t("Email Address"), key: "email", type: "tags" },
              { name: t("Password"), key: "password", type: "input" }
          ]
        : [{ name: t("Email Address"), key: "email", type: "tags" }];

@withI18n()
class UserAccountsGroupAdd extends React.Component {
    render() {
        const { t, handleSubmit, edit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className={style.title}>{t("Account and Password")}</h2>
                    <ul className={style.from}>
                        {renderFrom(inputList(t, edit), this.props)}
                    </ul>
                    <h2 className={style.title}>{t("Account Status")}</h2>
                    <ul className={style.from}>
                        {renderFrom(selectList(t), this.props)}
                    </ul>
                    <EdButton type="submit">
                        {edit
                            ? t("Save Change")
                            : t("Add Users and Download Password")}
                    </EdButton>
                </div>
            </form>
        );
    }
}

export default withFormik({
    enableReinitialize: true,
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
        const { edit } = props;
        if (edit) {
            console.log(values);
            let data = {};
            const {
                email,
                client_status,
                institution_status,
                organizer_status
            } = values;
            email.forEach(val => {
                data[val] = {
                    client_status: client_status,
                    institution_status: institution_status,
                    organizer_status: organizer_status
                };
            });
            const { success } = await groupAccountsEdit(values);
            if (success) {
                props.history.push("/user-accounts");
            }
        } else {
            const { success } = await addGroupAccounts(values);
            if (success) {
                props.history.push("/user-accounts");
            }
        }
    },
    displayName: "BasicForm"
})(UserAccountsGroupAdd);
