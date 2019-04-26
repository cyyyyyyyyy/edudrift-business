import React from "react";
import { withI18n } from "react-i18next";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdTable from "components/EdTable";

import style from "./user-accounts.module.scss";

const columns = ["Name", "Company", "City", "State"];

const data = [
    [<a>Joe James</a>, "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"]
];

const options = {
    print: false,
    search: false,
    download: false,
    filter: false,
    viewColumns: false,
    pagination: false
};

@withI18n()
class UserAccounts extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <ul className={style["user-title"]}>
                    <li>
                        <EdInput />
                    </li>
                    <li>
                        <EdButton>{t("Search")}</EdButton>
                    </li>
                    <li>
                        <EdButton>{t("Add User")}</EdButton>
                    </li>
                    <li>
                        <EdButton>{t("Group Add")}</EdButton>
                    </li>
                </ul>
                <EdTable columns={columns} data={data} options={options} />
            </div>
        );
    }
}

export default UserAccounts;
