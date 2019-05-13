import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";
import queryString from "query-string";

import EdButton from "../components/EdButton";
import { renderFrom } from "./render-from";

import countries from "utils/countries";
import { education_stage, gender } from "utils/select-options";
import { getClientsById, updateClients } from "../request/accounts";

import style from "./user-accounts-add.module.scss";

const formList = t => [
    { name: t("Givenname as per passport"), key: "given_name", type: "input" },
    { name: t("Surname as per passport"), key: "surname", type: "input" },
    { name: t("Nickname/Alias"), key: "nickname", type: "input" },
    {
        name: t("Stage of Education"),
        key: "education_stage",
        type: "select",
        options: education_stage(t)
    },
    {
        name: t("Full Name of Institution"),
        key: "institution_full_name",
        type: "input"
    },
    {
        name: t("Short Name of Institution"),
        key: "institution_short_name",
        type: "input"
    },
    {
        name: t("Gender"),
        key: "gender",
        type: "select",
        options: gender(t)
    },
    { name: t("Birthday"), key: "birthday", type: "date" },
    {
        name: t("Nationality"),
        key: "nationality",
        type: "select",
        options: countries
    },
    {
        name: t("Passport Issuing Country"),
        key: "passport_issuing_country",
        type: "select",
        options: countries
    },
    { name: t("Contact Number"), key: "contact_number", type: "input" },
    {
        name: t("Emergency Contact Person"),
        key: "emergency_contact_person",
        type: "input"
    },
    {
        name: t("Emergency Contact"),
        key: "emergency_contact_number",
        type: "input"
    }
];

@withI18n()
class ClientEdit extends React.Component {
    render() {
        const { t, handleSubmit, edit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className={style.title}>{t("Personal Information")}</h2>
                    <ul className={style.from}>
                        {renderFrom(formList(t, edit), this.props)}
                    </ul>
                    <EdButton type="submit">{t("Save Change")}</EdButton>
                </div>
            </form>
        );
    }
}

const From = withFormik({
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
        const { location, history } = props;
        const userId = queryString.parse(location.search).userId;
        const { success } = await updateClients(userId, values);
        if (success) {
            history.push("/client");
        }
    },
    displayName: "BasicForm"
})(ClientEdit);

export default class ClientEditRouter extends React.Component {
    state = {
        data: {}
    };

    componentWillMount() {
        const { location } = this.props;
        const userId = queryString.parse(location.search).userId;
        getClientsById(userId).then(({ data }) => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        return <From data={this.state.data} {...this.props} />;
    }
}
