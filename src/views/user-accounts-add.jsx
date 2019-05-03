import React from "react";
import { withI18n } from "react-i18next";
import Select from "@material-ui/core/Select";
import { withFormik } from "formik";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdSelectTags from "components/EdSelectTags";

import style from "./user-accounts-add.module.scss";

const userStatusSelects = [
    { name: "Active", key: "Active" },
    { name: "Disabled", key: "Disabled" },
    { name: "Pending", key: "Pending" }
];

export const selectList = [
    {
        name: "Client End Status",
        key: "clientStatus",
        type: "select",
        options: userStatusSelects
    },
    {
        name: "Institutional Panel Status",
        key: "institutionStatus",
        type: "select",
        options: userStatusSelects
    },
    {
        name: "Travel Panel Status",
        key: "travelStatus",
        type: "select",
        options: userStatusSelects
    },
    {
        name: "Competition Panel Status",
        key: "competitionStatus",
        type: "select",
        options: userStatusSelects
    }
];

const inputList = [
    { name: "Email Address", key: "email", type: "input" },
    { name: "Password", key: "password", type: "input" }
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
                        value=""
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[`${val.key}`]}
                    name={val.key}
                    error={errors[`${val.key}`]}
                    style={{ width: 400 }}
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
                    name={val.key}
                    defaultValue={values[`${val.key}`]}
                    onChange={data => handleTagChange(val.key, data)}
                />
            </li>
        );
    };

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

    return arr;
};

@withI18n()
class UserAccountsAdd extends React.Component {
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
                    <EdButton type="submit">{t("Add User")}</EdButton>
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
            values = { ...user };
        }
        return values;
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
    },
    displayName: "BasicForm"
})(UserAccountsAdd);
