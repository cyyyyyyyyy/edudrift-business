import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";
import cookie from "js-cookie";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { changePassword } from "request/accounts";
import EdButton from "components/EdButton";
import tokenHelper from "utils/tokenHelper";

import { renderFrom } from "views/render-form";
import style from "./style.module.scss";

const formList = t => [
    { name: t("Email Address"), key: "email", type: "input" },
    {
        name: t("Password"),
        key: "password",
        type: "input",
        disabled: true,
        edit: false
    }
];

const formList2 = t => [
    {
        name: t("Current Password"),
        key: "old_password",
        type: "input",
        edit: true
    },
    {
        name: t("New Password"),
        key: "new_password",
        type: "input",
        edit: true
    },
    {
        name: t("Confirm New Password"),
        key: "confirm_new_password",
        type: "input",
        edit: true
    }
];

@withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
        return { email: cookie.get("email"), password: "xxxxxxxxxxxxxxx" };
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setFieldError, props }) => {
        const { history } = props;
        let flag = true;
        if (values.new_password !== values.confirm_new_password) {
            setFieldError("confirm_new_password", "Please enter same Password");
            flag = false;
        }
        if (flag) {
            await changePassword({
                old_password: values.old_password,
                password: values.new_password
            });
            tokenHelper.clearToken();
            history.push("/sign-in");
        } else {
            setFieldError("old_password", "Password Error");
        }
    },
    displayName: "BasicForm"
})
@withI18n()
class Account extends React.Component {
    state = {
        open: false
    };
    handleClose() {
        this.setState({
            open: false
        });
    }
    handleOpen() {
        this.setState({
            open: true
        });
    }
    render() {
        const { t, handleSubmit } = this.props;

        return (
            <form>
                <ul className={style.from}>
                    {renderFrom(formList(t), this.props)}
                </ul>
                <a
                    style={{ fontSize: 12, color: "red", cursor: "pointer" }}
                    onClick={this.handleOpen.bind(this)}
                >
                    {t("Change Password")}
                </a>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {t("Change Password")}
                    </DialogTitle>
                    <DialogContent>
                        <ul className={style.from}>
                            {renderFrom(formList2(t), this.props)}
                        </ul>
                    </DialogContent>
                    <DialogActions>
                        <EdButton
                            style={{ width: 200, marginRight: 20 }}
                            onClick={handleSubmit}
                        >
                            {t("Save changes")}
                        </EdButton>
                    </DialogActions>
                </Dialog>
            </form>
        );
    }
}

export default Account;
