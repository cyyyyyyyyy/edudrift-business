import React from "react";
import { withI18n } from "react-i18next";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdTable from "components/EdTable";

import style from "./user-accounts.module.scss";

const columns = t => [
    { label: t("Email Address"), name: "email", options: { sort: false } },
    { label: t("Client End"), name: "clientStatus", options: { sort: false } },
    {
        label: t("Institution Panel"),
        name: "institutionStatus",
        options: { sort: false }
    },
    {
        label: t("Travel Panel"),
        name: "travelStatus",
        options: { sort: false }
    },
    {
        label: t("Competition Panel"),
        name: "competitionStatus",
        options: { sort: false }
    }
];

const data = [
    {
        email: "asdad@gmail.com",
        password: "111111",
        clientStatus: "Disabled",
        institutionStatus: "Disabled",
        travelStatus: "Disabled",
        competitionStatus: "Disabled"
    },
    {
        email: "asdad@gmail.com",
        password: "111111",
        clientStatus: "Disabled",
        institutionStatus: "Disabled",
        travelStatus: "Disabled",
        competitionStatus: "Disabled"
    },
    {
        email: "asdad@gmail.com",
        password: "111111",
        clientStatus: "Disabled",
        institutionStatus: "Disabled",
        travelStatus: "disable",
        competitionStatus: "Disabled"
    }
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
    state = {
        selectVal: ""
    };

    setSelectVal(e) {
        this.setState({
            selectVal: e.target.value
        });
    }

    goPath() {
        const { selectVal } = this.state;
        const { history } = this.props;
        if (selectVal === "2") {
            history.push("/user-accounts/group-edit");
        } else if (selectVal === "1") {
            history.push("/user-accounts/delete");
        }
    }

    render() {
        const { t } = this.props;
        let tableData = [];
        data.map(val => {
            let handleVal = {
                ...val,
                email: (
                    <Link to={`/user-accounts/edit?email=${val.email}`}>
                        <a style={{ color: "#2F80ED", cursor: "pointer" }}>
                            {val.email}
                        </a>
                    </Link>
                )
            };
            tableData.push(handleVal);
        });
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
                        <Link to="/user-accounts/add">
                            <EdButton>{t("Add User")}</EdButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-accounts/group-add">
                            <EdButton>{t("Group Add")}</EdButton>
                        </Link>
                    </li>
                </ul>
                <EdTable
                    columns={columns(t)}
                    data={tableData}
                    options={options}
                />
                <div className={style.footer}>
                    <Select
                        native
                        style={{ width: 250 }}
                        input={<EdInput />}
                        onChange={this.setSelectVal.bind(this)}
                    >
                        <option style={{ display: "none" }}>{t("")}</option>
                        <option value={1}>{t("Delete Selected Users")}</option>
                        <option value={2}>
                            {t("Group Edit Account Status")}
                        </option>
                    </Select>
                    <EdButton
                        style={{ width: 100 }}
                        onClick={this.goPath.bind(this)}
                    >
                        {t("GO")}
                    </EdButton>
                </div>
            </div>
        );
    }
}

export default UserAccounts;
