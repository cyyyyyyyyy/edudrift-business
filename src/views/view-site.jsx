import React from "react";
import { withI18n } from "react-i18next";
import { Link } from "react-router-dom";

import EdButton from "../components/EdButton";

import style from "./view-site.module.scss";

const userList = [
    { key: "user-accounts", name: "User Accounts and Status" },
    { key: "client", name: "Client End Users" },
    { key: "institutional", name: "Institutional Partners" },
    { key: "competition", name: "Competition Organisers" }
];

@withI18n()
class ViewSite extends React.Component {
    renderList(list, t) {
        let arr = [];
        if (list && Array.isArray(list)) {
            list.forEach(data => {
                arr.push(
                    <li key={data.key}>
                        <span>{t(data.name)}</span>
                        <Link to={`/${data.key}`}>
                            <EdButton size="small" style={{ width: "100px" }}>
                                {t("View")}
                            </EdButton>
                        </Link>
                    </li>
                );
            });
        }
        return arr;
    }

    render() {
        const { t } = this.props;
        return (
            <div className={style.main}>
                <h2 className={style.title}>{t("Action Log")}</h2>
                <ul className={style.list}>
                    <li>
                        <span>{t("Action Log Entries")}</span>
                        <EdButton size="small" style={{ width: "100px" }}>
                            {t("View")}
                        </EdButton>
                    </li>
                </ul>
                <h2 className={style.title}>{t("Users")}</h2>
                <ul className={style.list}>{this.renderList(userList, t)}</ul>
                <h2 className={style.title}>{t("Programs")}</h2>
                <h2 className={style.title}>{t("Bookings")}</h2>
                <h2 className={style.title}>{t("Finance")}</h2>
            </div>
        );
    }
}

export default ViewSite;
