import React from "react";
import { withTranslation } from "react-i18next";
import { withFormik } from "formik";
import Button from "components/EdButton";

import { renderFrom } from "views/render-form";
import style from "./style.module.scss";
import { updateClients } from "request/accounts";
import cookie from "js-cookie";

const formList = (t, edit) => [
    {
        name: t("Secondary Email Address"),
        key: "secondary_email",
        type: "input",
        edit
    },
    { name: t("Mobile Number"), key: "contact_number", type: "input", edit },
    {
        name: t("WhatsApp Contact"),
        key: "whatsapp_number",
        type: "input",
        edit
    },
    {
        name: t("WeChat Contact"),
        key: "wechat_account",
        type: "input",
        edit
    },
    {
        name: t("Kakao Contact"),
        key: "kakao_account",
        type: "input",
        edit
    },
    {
        name: t("LINE Contact"),
        key: "line_account",
        type: "input",
        edit
    },
    {
        name: t("Emergency Contact Person"),
        key: "emergency_person",
        type: "input",
        edit
    },
    {
        name: t("Emergency Contact Number"),
        key: "emergency_number",
        type: "input",
        edit
    }
];

@withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
        const { data } = props;

        return { ...data };
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setSubmitting, props }) => {
        await updateClients(cookie.get("userId"), values);
    },
    displayName: "BasicForm"
})
@withTranslation()
class Contacts extends React.Component {
    state = {
        edit: false
    };

    handleEdit() {
        const { handleSubmit } = this.props;
        const { edit } = this.state;
        this.setState({
            edit: !edit
        });
        if (edit) {
            handleSubmit();
        }
    }

    render() {
        const { t } = this.props;
        const { edit } = this.state;
        return (
            <form>
                <ul className={style.from}>
                    {renderFrom(formList(t, edit), this.props)}
                </ul>
                <Button onClick={this.handleEdit.bind(this)}>
                    {!edit ? "Edit" : "Save"}
                </Button>
            </form>
        );
    }
}

export default Contacts;
