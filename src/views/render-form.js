import React from "react";
import moment from "moment";

import Select from "components/EdSelect";
import EdInput from "components/EdInput";
import EdSelectTags from "components/EdSelectTags";
import EdUploadButton from "components/EdUploadButton";
import EdDatePick from "components/EdDatePick";
import Tooltip from "@material-ui/core/Tooltip";

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

    const handleSelectChange = (key, val) => {
        setFieldValue(key, val);
    };

    const handleDatePickChange = (key, val) => {
        setFieldValue(key, val);
    };

    const renderSelect = val => {
        let select = [];
        if (val && val.options) {
            select = val.options.filter(
                data => data.value === values[`${val.key}`]
            );
        }
        return (
            <li key={val.key}>
                <span>{t(val.name)}:</span>
                {val.edit ? (
                    <Select
                        options={val.options}
                        value={select[0]}
                        onChange={data =>
                            handleSelectChange(val.key, data.value)
                        }
                        name={val.key}
                        width={252}
                    />
                ) : select[0] ? (
                    <span>{select[0].label}</span>
                ) : null}
            </li>
        );
    };

    const renderInput = val => {
        return (
            <li key={val.key}>
                <span>{t(val.name)}:</span>
                {val.edit ? (
                    <Tooltip
                        placement="right"
                        open={!!errors[`${val.key}`]}
                        title={errors[`${val.key}`]}
                    >
                        <EdInput
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[`${val.key}`]}
                            name={val.key}
                            error={errors[`${val.key}`]}
                            style={{ width: 250 }}
                            disabled={val.disabled}
                        />
                    </Tooltip>
                ) : (
                    <span>{values[`${val.key}`]}</span>
                )}
            </li>
        );
    };

    const renderGroupSelect = val => {
        return (
            <li key={val.key}>
                <span>{t(val.name)}:</span>
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

    const renderDatePicker = val => {
        console.log(values[`${val.key}`]);
        return (
            <li key={val.key}>
                <span>{t(val.name)}:</span>
                {val.edit ? (
                    <EdDatePick
                        style={{ width: 250 }}
                        selected={new Date(values[`${val.key}`])}
                        onChange={data => handleDatePickChange(val.key, data)}
                        dateFormat="yyyy/MM/dd"
                    />
                ) : (
                    <span>
                        {moment(values[`${val.key}`]).format("YYYY/MM/DD")}
                    </span>
                )}
            </li>
        );
    };

    const renderText = val => {
        return (
            <li key={val.key}>
                <span>{t(val.name)}:</span>
                <EdInput
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[`${val.key}`]}
                    name={val.key}
                    error={errors[`${val.key}`]}
                    style={{ width: 400, minHeight: 100 }}
                    rows={5}
                    multiline
                    disabled={val.disabled}
                />
            </li>
        );
    };

    const renderLogoButton = val => {
        return (
            <li key={val.key}>
                <span>{t(val.name)}</span>
                <EdUploadButton value={values[`${val.key}`]} />
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
                case "date":
                    arr.push(renderDatePicker(val, props));
                    break;
                case "text":
                    arr.push(renderText(val, props));
                    break;
                case "logo":
                    arr.push(renderLogoButton(val, props));
            }
        });
    }

    return arr;
};
