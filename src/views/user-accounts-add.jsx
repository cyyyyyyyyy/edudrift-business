import React from "react";
import { withI18n } from "react-i18next";
import Select from "@material-ui/core/Select";

import EdInput from "components/EdInput";

const userStatusSelects = [
    { name: "Active", key: "Active" },
    { name: "Disabled", key: "Disabled" },
    { name: "Pending", key: "Pending" }
];

@withI18n()
class UserAccountsAdd extends React.Component {
    renderSelect () {

    };

    render() {
        const { t } = this.props;
        return (
            <div>
                <h2>{t("Account and Password")}</h2>
                <ul>
                    <li>
                        <span>{t("Email Address")}</span>
                        <EdInput />
                    </li>
                    <li>
                        <span>{t("Password")}</span>
                        <EdInput />
                    </li>
                </ul>
                <h2>{t("Account Status")}</h2>
                <ul>
                    <li>
                        <span>{t("Client End Status")}</span>
                        <Select native input={<EdInput />}>
                            <option value={1}>1</option>
                        </Select>
                    </li>
                    <li>
                        <span>{t("Institutional Panel Status")}</span>
                    </li>
                    <li>
                        <span>{t("Travel Panel Status")}</span>
                    </li>
                    <li>
                        <span>{t("Competition Panel Status")}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserAccountsAdd;
