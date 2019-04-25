import React from "react";
import { withI18n } from "react-i18next";
import { Formik } from "formik";

import EdInput from "../components/EdInput";
import EdButtom from "../components/EdButton";

import style from "./home.module.scss";

@withI18n()
class Home extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className={style.main}>
                <h2 className={style.title}>{t("EduDrift Admin Panel")}</h2>
                <ul>
                    <li style={{ paddingBottom: 10 }}>
                        <span className={style.label}>
                            {t("Email Address")}*
                        </span>
                        <EdInput style={{ width: 250 }} />
                    </li>
                    <li>
                        <span className={style.label}>{t("Password")}*</span>
                        <EdInput style={{ width: 250 }} />
                    </li>
                </ul>
                <div style={{ padding: "20px 0 0 66px" }}>
                    <EdButtom
                        variant="outlined"
                        size="large"
                        style={{ width: 120 }}
                    >
                        SIGN IN
                    </EdButtom>
                </div>
            </div>
        );
    }
}
export default Home;
