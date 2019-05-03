import React from "react";
import { withI18n } from "react-i18next";

import EdButton from "components/EdButton";
import EdSelectTags from "components/EdSelectTags";

import style from "./user-accounts-add.module.scss";

@withI18n()
class UserAccountsDelete extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <h2 className={style.subTitle}>
                    {t("Are you sure you want to delete the following users?")}
                </h2>
                <div style={{ padding: "10px 0" }}>
                    <EdSelectTags style={{ width: 870 }} />
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
                    <EdButton style={{ width: 200 }} type="submit">
                        {t("Delete")}
                    </EdButton>
                </div>
            </div>
        );
    }
}

export default UserAccountsDelete;
