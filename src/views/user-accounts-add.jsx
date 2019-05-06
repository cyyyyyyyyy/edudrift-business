import React from "react";
import { withI18n } from "react-i18next";
import Select from "@material-ui/core/Select";
import { withRouter } from "react-router-dom";

import { withFormik } from "formik";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdSelectTags from "components/EdSelectTags";

import { addAccounts, editAccounts } from "request/accounts";

import style from "./user-accounts-add.module.scss";

const userStatusSelects = [
    { name: "Active", key: "active" },
    { name: "Disabled", key: "disabled" },
    { name: "Pending", key: "pending" },
    { name: "Uninitialized", key: "uninitialized" }
];

export const selectList = t => [
    {
        name: t("Client End Status"),
        key: "client_status",
        type: "select",
        options: userStatusSelects
    },
    {
        name: t("Institutional Panel Status"),
        key: "institution_status",
        type: "select",
        options: userStatusSelects
    },
    {
        name: t("Competition Panel Status"),
        key: "organizer_status",
        type: "select",
        options: userStatusSelects
    }
];

const inputList = (t, disabled) => [
    { name: t("Email Address"), key: "email", type: "input" },
    { name: t("Password"), key: "password", type: "input", disabled: disabled }
];

export const renderFrom = (list, props) => {
    let arr = [];
    const {
        t,
        values,
        errors,
        handleChange,
        handleBlur,
        setFieldValue
    } = props;

    const handleTagChange = (key, val) => {
        setFieldValue(key, val);
    };

    const renderSelect = val => {
        return (
            <li key={val.key}>
                <span>{t(val.name)}</span>
                <Select
                    autoComplete="off"
                    value={values[`${val.key}`]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    native
                    name={val.key}
                    error={errors[`${val.key}`]}
                    input={<EdInput />}
                    style={{ width: 400 }}
                >
                    <option
                        selected="selected"
                        disabled="disabled"
                        style={{ display: "none" }}
                    />
                    {val.options.map(option => (
                        <option key={option.key} value={option.key}>
                            {option.name}
                        </option>
                    ))}
                </Select>
            </li>
        );
    };

    const renderInput = val => {
        return (
            <li key={val.key}>
                <span>{t(val.name)}</span>
                <EdInput
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[`${val.key}`]}
                    name={val.key}
                    error={errors[`${val.key}`]}
                    style={{ width: 400 }}
                    disabled={val.disabled}
                />
            </li>
        );
    };

    const renderGroupSelect = val => {
        console.log(values[`${val.key}`]);
        return (
            <li key={val.key}>
                <span>{t(val.name)}</span>
                <EdSelectTags
                    style={{
                        minHeight: "150px"
                    }}
                    name={val.key}
                    defaultValue={values[`${val.key}`]}
                    onChange={data => handleTagChange(val.key, data)}
                />
            </li>
        );
    };

    if (list && Array.isArray(list)) {
        list.forEach(val => {
            switch (val.type) {
                case "select":
                    arr.push(renderSelect(val, props));
                    break;
                case "input":
                    arr.push(renderInput(val, props));
                    break;
                case "tags":
                    arr.push(renderGroupSelect(val, props));
                    break;
            }
        });
    }

    return arr;
};

@withI18n()
class UserAccountsAdd extends React.Component {
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
                        {edit ? t("Save Change") : t("Add User")}
                    </EdButton>
                </div>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: props => {
        let values = {};
        const { edit, user } = props;
        if (edit) {
            console.log(user);
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
