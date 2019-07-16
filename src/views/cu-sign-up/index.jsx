import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";

import { register } from "request/accounts";

import EdInput from "components/EdInput";
import Button from "components/EdButton";

import style from "./sign-up.module.scss";

@withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
        return {};
    },
    handleSubmit: async (values, { setFieldError }) => {
        let flag = true;
        if (values.email !== values.confirm_email) {
            setFieldError("confirm_email", "Please enter same Email");
            flag = false;
        }
        if (values.password !== values.confirm_password) {
            setFieldError("confirm_password", "Please enter same Password");
            flag = false;
        }
        if (!values.agree) {
            setFieldError("agree", "Please Checked");
            flag = false;
        }
        if (!values.notification) {
            setFieldError("notification", "Please Checked");
            flag = false;
        }
        if (flag) {
            await register({
                role: "client",
                email: values.confirm_email,
                password: values.confirm_password
            });
        }
    },
    displayName: "BasicForm"
})
@withTranslation()
class CuSignIn extends React.Component {
    renderInput(props) {
        const inputs = [];
        const { t, values, handleChange, errors } = props;
        const arr = [
            { name: t("Email Address *"), key: "email" },
            { name: t("Confirm Email Address *"), key: "confirm_email" },
            { name: t("Create Password *"), key: "password" },
            {
                name: t("Confirm Password *"),
                key: "confirm_password"
            }
        ];
        arr.forEach(val => {
            inputs.push(
                <li key={val.key}>
                    <Tooltip
                        placement="right"
                        open={!!errors[`${val.key}`]}
                        title={errors[`${val.key}`]}
                    >
                        <EdInput
                            name={val.key}
                            value={values[`${val.key}`]}
                            onChange={handleChange}
                            placeholder={val.name}
                            type={val.type || "text"}
                            style={{ width: 285, height: 38 }}
                        />
                    </Tooltip>
                </li>
            );
        });
        return inputs;
    }

    handleCheck(check, val) {
        const { setFieldValue } = this.props;
        setFieldValue(val, check);
    }

    render() {
        const { t, errors, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} style={{ paddingTop: 50 }}>
                <ul className={style.signBox}>
                    <li>
                        <h2 className={style.title}>
                            {t("Email Registration")}
                        </h2>
                    </li>
                    {this.renderInput(this.props)}
                    <li />
                    <li className={style.logBtn}>
                        <Button
                            size="large"
                            style={{ width: 200 }}
                            type="submit"
                        >
                            {t("Log In")}
                        </Button>
                    </li>
                    <li style={{ padding: "0 0 0" }}>
                        <ul className={style.check}>
                            <li>
                                <Tooltip
                                    placement="left"
                                    open={!!errors.agree}
                                    title={errors.agree}
                                >
                                    <Checkbox
                                        onChange={(e, checked) =>
                                            this.handleCheck(checked, "agree")
                                        }
                                    />
                                </Tooltip>
                            </li>
                            <li>
                                {t(
                                    "By clicking here, you have to agree to the the terms presented in the Terms & Conditions agreeement"
                                )}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={style.check}>
                            <li>
                                <Tooltip
                                    placement="left"
                                    open={!!errors.notification}
                                    title={errors.notification}
                                >
                                    <Checkbox
                                        onChange={(e, checked) =>
                                            this.handleCheck(
                                                checked,
                                                "notification"
                                            )
                                        }
                                    />
                                </Tooltip>
                            </li>
                            <li>
                                {t(
                                    "Receive notification on new educational events by EduDrift"
                                )}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>{t("Already have an account?")}</span>
                        <Link to="/sign-in">
                            <span>{t("Sign in")}</span>
                        </Link>
                    </li>
                </ul>
            </form>
        );
    }
}

export default CuSignIn;
