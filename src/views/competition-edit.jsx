import React from "react";
import { withI18n } from "react-i18next";
import { withFormik } from "formik";
import queryString from "query-string";

import { renderFrom } from "./render-from";
import { getOrganizersById, updateOrganizers } from "../request/accounts";
import { gender, contact_method, Currency } from "../utils/select-options";

import EdButton from "../components/EdButton";

import style from "./user-accounts-add.module.scss";

const formList1 = t => [
    { name: t("Full Name of Organisation"), key: "full_name", type: "input" },
    { name: t("Short Name of Organisation"), key: "short_name", type: "input" },
    { name: t("Logo of Organisation"), key: "logo_url", type: "logo" },
    { name: t("Intro of Organisation"), key: "introduction", type: "text" }
];

const formList2 = t => [
    { name: t("Name of Manager"), key: "manager_full_name", type: "input" },
    {
        name: t("Gender of Manager"),
        key: "manager_gender",
        type: "select",
        options: gender(t)
    },
    { name: t("Contact Number"), key: "manager_contact_number", type: "input" },
    {
        name: t("Whatsapp Number"),
        key: "manager_whatsapp_number",
        type: "input"
    },
    {
        name: t("Facebook Account"),
        key: "manager_facebook_account",
        type: "input"
    },
    { name: t("Wechat Account"), key: "manager_wechat_account", type: "input" },
    {
        name: t("Preferred Contact Method"),
        key: "manager_preferred_contact_method",
        type: "select",
        options: contact_method(t)
    }
];

const formList3 = t => [
    {
        name: t("Preferred Currency"),
        key: "preferred_currency",
        type: "select",
        options: Currency(t)
    },
    {
        name: t("Bank Acount Number"),
        key: "bank_account_number",
        type: "input"
    },
    { name: t("Bank Acount Owner"), key: "bank_account_owner", type: "input" },
    { name: t("Name of Bank"), key: "bank_name", type: "input" },
    { name: t("Address of Bank"), key: "bank_address", type: "input" },
    { name: t("SWIFT Code"), key: "bank_swift", type: "input" }
];

@withI18n()
class CompetitionEdit extends React.Component {
    render() {
        const { t, handleSubmit, edit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <h2 className={style.title}>{t("Info of Organisation")}</h2>
                    <ul className={style.from}>
                        {renderFrom(formList1(t, edit), this.props)}
                    </ul>
                    <h2 className={style.title}>{t("Info of Manager")}</h2>
                    <ul className={style.from}>
                        {renderFrom(formList2(t, edit), this.props)}
                    </ul>
                    <h2 className={style.title}>{t("Finance")}</h2>
                    <ul className={style.from}>
                        {renderFrom(formList3(t, edit), this.props)}
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
        console.log(props);
        const { data } = props;
        let values = { ...data, ...data.manager, ...data.finance };
        return values;
    },
    validate: (values, props) => {
        let errors = {};
        return {};
    },
    handleSubmit: async (values, { setSubmitting, props }) => {
        const {
            full_name,
            short_name,
            logo_url,
            introduction,
            manager_full_name,
            manager_gender,
            manager_whatsapp_number,
            manager_contact_number,
            manager_facebook_account,
            manager_wechat_account,
            manager_preferred_contact_method,
            preferred_currency,
            bank_account_number,
            bank_account_owner,
            bank_name,
            bank_address,
            bank_swift
        } = values;
        let data = {
            full_name,
            short_name,
            logo_url,
            introduction,
            manager: {
                manager_full_name,
                manager_gender,
                manager_whatsapp_number,
                manager_contact_number,
                manager_facebook_account,
                manager_wechat_account,
                manager_preferred_contact_method
            },
            finance: {
                preferred_currency,
                bank_account_number,
                bank_account_owner,
                bank_name,
                bank_address,
                bank_swift
            }
        };
        const { location, history } = props;
        const userId = queryString.parse(location.search).userId;
        const { success } = await updateOrganizers(userId, data);
        if (success) {
            history.push("/competition");
        }
    },
    displayName: "BasicForm"
})(CompetitionEdit);

export default class CompetitionEditRouter extends React.Component {
    state = {
        data: {}
    };

    componentWillMount() {
        const { location } = this.props;
        const userId = queryString.parse(location.search).userId;
        getOrganizersById(userId).then(({ data }) => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        return <From data={this.state.data} {...this.props} />;
    }
}
