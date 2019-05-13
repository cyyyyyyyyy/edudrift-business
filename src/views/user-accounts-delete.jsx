import React from "react";
import { withI18n } from "react-i18next";
import { parse } from "query-string";

import EdButton from "components/EdButton";
import EdSelectTags from "components/EdSelectTags";

import { getAccountsByIds, deleteAccounts } from "request/accounts";

import style from "./user-accounts-add.module.scss";

@withI18n()
class UserAccountsDelete extends React.Component {
    state = {
        email: [],
        render: false
    };
    componentWillMount() {
        let { ids } = parse(this.props.location.search);
        if (ids) {
            ids = ids.split(",");
            getAccountsByIds(ids).then(({ data }) => {
                let email = [];
                data.forEach(val => {
                    email.push(val.email);
                });
                this.setState({
                    email: email,
                    render: true
                });
            });
        }
    }

    handleChange(data) {
        this.setState({
            email: data
        });
    }

    async handleDelete() {
        const { email } = this.state;
        const { history } = this.props;
        await deleteAccounts(email);
        history.push('/user-accounts')
    }

    render() {
        const { t } = this.props;
        const { email, render } = this.state;
        console.log(email);
        return (
            <div>
                <h2 className={style.subTitle}>
                    {t("Are you sure you want to delete the following users?")}
                </h2>
                <div style={{ padding: "10px 0" }}>
                    {render ? (
                        <EdSelectTags
                            onChange={this.handleChange.bind(this)}
                            defaultValue={email}
                            style={{ width: 870 }}
                        />
                    ) : null}
                </div>
                <h2 className={style.subTitle}>
                    {t("X Users will be deleted")}
                </h2>
                <h2 className={style.subTitle}>
                    {t("X Program Records will be deleted")}
                </h2>
                <h2 className={style.subTitle}>
                    {t("X Booking Records will be deleted")}
                </h2>
                <h2 className={style.subTitle}>
                    {t("X Finance Records will be deleted")}
                </h2>
                <div style={{ paddingTop: 10 }}>
                    <EdButton
                        style={{ width: 200 }}
                        type="submit"
                        onClick={this.handleDelete.bind(this)}
                    >
                        {t("Delete")}
                    </EdButton>
                </div>
            </div>
        );
    }
}

export default UserAccountsDelete;
