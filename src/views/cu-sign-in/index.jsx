import React from "react";
import { withTranslation } from "react-i18next";
import { withFormik } from "formik";
import cookie from "js-cookie";

import EdInput from "components/EdInput";
import Button from "components/EdButton";

import { login } from "request/accounts";
import tokenHelper from "utils/tokenHelper";

import style from "./index.module.scss";

@withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
        return {};
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setSubmitting, props }) => {
        const { success, data } = await login(values);
        const { history } = props;
        if (success) {
            tokenHelper.setToken(data.token);
            cookie.set("userId", data.account.id);
            cookie.set("email", data.account.email);
            history.push("/cu-info");
        }
    },
    displayName: "BasicForm"
})
@withTranslation()
class CuSignIn extends React.Component {
    componentWillMount() {}

    render() {
        const { t, values, handleChange, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} style={{ paddingTop: 50 }}>
                <ul className={style.signBox}>
                    <li>
                        <div className={style.text}>
                            {t("Email Address/Username")} *
                        </div>
                        <div>
                            <EdInput
                                name="login"
                                value={values["login"]}
                                style={{ width: 340, height: 38 }}
                                onChange={handleChange}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={style.text}>{t("Password")} *</div>
                        <div>
                            <EdInput
                                name="password"
                                value={values["password"]}
                                style={{ width: 340, height: 38 }}
                                onChange={handleChange}
                            />
                        </div>
                    </li>
                    <li className={style.logBtn}>
                        <Button
                            type="submit"
                            size="large"
                            variant="outlined"
                            style={{ width: 200 }}
                        >
                            {t("Log In")}
                        </Button>
                    </li>
                    <li>
                        <i className={style.line} />
                    </li>
                </ul>
            </form>
        );
    }
}

export default CuSignIn;
