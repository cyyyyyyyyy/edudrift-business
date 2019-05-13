import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";

import EdButton from "components/EdButton";
import { userStatusSelects } from "utils/select-options";

import { addAccounts, editAccounts } from "request/accounts";

import style from "./user-accounts-add.module.scss";
import { renderFrom } from "./render-from";

export const selectList = t => [
    {
        name: t("Client End Status"),
        key: "client_status",
        type: "select",
        options: userStatusSelects(t)
    },
    {
        name: t("Institutional Panel Status"),
        key: "institution_status",
        type: "select",
        options: userStatusSelects(t)
    },
    {
        name: t("Competition Panel Status"),
        key: "organizer_status",
        type: "select",
        options: userStatusSelects(t)
    }
];

const inputList = (t, disabled) => [
    { name: t("Email Address"), key: "email", type: "input" },
    { name: t("Password"), key: "password", type: "input", disabled: disabled }
];

@withI18n()
class UserAccountsAdd extends React.Component {
    render() {
        const { t, handleSubmit, edit } = this.props;
        console.log(this.props);
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
                        {edit ? t("Save Change") : t("Add User")}
                    </EdButton>
                </div>
            </form>
        );
    }
}

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
        let values = {};
        const { edit, user } = props;
        if (edit) {
            values = { ...user };
        }
        return values;
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setSubmitting, props }) => {
        const { history, edit, userId } = props;
        let success;
        if (edit) {
            const data = await editAccounts(userId, values);
            success = data.success;
        } else {
            const data = await addAccounts(values);
            success = data.success;
        }

        if (success) {
            history.push("/user-accounts");
        }
    },
    displayName: "BasicForm"
})(UserAccountsAdd);
