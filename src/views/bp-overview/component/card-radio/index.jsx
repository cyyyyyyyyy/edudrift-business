import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";

import style from "./index.module.scss";

const CardRadio = props => {
    const { children, checked, onChange, value, name } = props;
    const handleChange = e => {
        onChange(e);
    };
    return (
        <div className={`${style.card} ${checked ? style.select_card : ""}`}>
            <div className={style.card_radio}>
                <Radio
                    name={name}
                    value={value}
                    checked={checked}
                    color="primary"
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className={style.card_content}>{children}</div>
        </div>
    );
};

export default CardRadio;
