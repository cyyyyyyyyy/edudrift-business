import React from "react";
import { withI18n } from "react-i18next";

import EdInput from "../components/EdInput";
import EdButton from "../components/EdButton";
import { withFormik } from "formik";

import { adminSignIn } from "request/user";

import tokenHelper from "utils/tokenHelper";

import style from "./home.module.scss";

@withI18n()
class Home extends React.Component {
    componentWillMount() {
        const { history } = this.props;
        const token = tokenHelper.getToken();
        if (token) {
            history.push("/view-site");
        }
    }

    render() {
        const { t, handleSubmit, values, handleChange } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className={style.main}>
                    <h2 className={style.title}>{t("EduDrift Admin Panel")}</h2>
                    <ul>
                        <li style={{ paddingBottom: 10 }}>
                            <span className={style.label}>
                                {t("Email Address")}*
                            </span>
                            <EdInput
                                onChange={handleChange}
                                value={values.email}
                                style={{ width: 250 }}
                                name="email"
                            />
                        </li>
                        <li>
                            <span className={style.label}>
                                {t("Password")}*
                            </span>
                            <EdInput
                                style={{ width: 250 }}
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </li>
                    </ul>
                    <div style={{ padding: "20px 0 0 66px" }}>
                        <EdButton
                            variant="outlined"
                            size="large"
                            type="submit"
                            style={{ width: 120 }}
                        >
                            SIGN IN
                        </EdButton>
                    </div>
                </div>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => {
        return {};
    },
    validate: () => {
        return {};
    },
    handleSubmit: async (values, { props }) => {
        const { data, success } = await adminSignIn(
            values.email,
            values.password
        );
        if (success) {
            tokenHelper.setToken(data.token);
            props.history.push("/view-site");
        }
    },
    displayName: "BasicForm"
})(Home);
