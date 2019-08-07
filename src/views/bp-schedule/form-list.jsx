import React, { useState, useEffect } from "react";

const FormList = props => {
    const { render, onChange, data, label, addButton } = props;
    const [values, setValues] = useState([]);

    useEffect(() => {
        if (data) {
            setValues(data);
        }
    });

    const handleChange = (data, key) => {
        const newValues = values.map((val, index) => {
            if (key === index) {
                return data;
            }
            return val;
        });
        onChange(label, newValues);
    };

    const handleAdd = data => {
        const newValues = [...values, data];
        setValues(newValues);
        onChange(label, newValues);
    };

    const handleDelete = (data, key) => {
        const newValues = values.splice(key, 1, 0);
        setValues(newValues);
        onChange(label, newValues);
    };

    const renderList = () => {
        const arr = [];
        values.forEach((value, index) => {
            arr.push(render(value, index, handleChange, handleDelete));
        });
        return arr;
    };

    return (
        <React.Fragment>
            {renderList()}
            {addButton(handleAdd)}
        </React.Fragment>
    );
};

export default FormList;
