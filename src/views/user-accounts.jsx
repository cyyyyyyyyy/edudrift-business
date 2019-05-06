import React from "react";
import { connect } from "react-redux";
import { withI18n } from "react-i18next";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdTable from "components/EdTable";

import { getAccounts } from "request/accounts";

import style from "./user-accounts.module.scss";

const columns = t => [
    { label: t("Email Address"), name: "email", options: { sort: false } },
    { label: t("Client End"), name: "client_status", options: { sort: false } },
    {
        label: t("Institution Panel"),
        name: "institution_status",
        options: { sort: false }
    },
    {
        label: t("Competition Panel"),
        name: "organizer_status",
        options: { sort: false }
    }
];

@withI18n()
class UserAccounts extends React.Component {
    state = {
        selectVal: "",
        accounts: [],
        tableSelect: []
    };

    componentWillMount() {
        getAccounts().then(data => {
            if (data.success) {
                this.setState({
                    accounts: data.data.results
                });
            }
        });
    }

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

    handleSelect(val, val2) {
        let arr = [];
        val2.forEach(data => arr.push(data.index));
        this.setState({
            tableSelect: arr
        });
    }

    render() {
        const { t } = this.props;
        const { accounts, tableSelect } = this.state;
        const options = {
            print: false,
            search: false,
            download: false,
            filter: false,
            viewColumns: false,
            pagination: true,
            selectableRows: "multiple",
            rowsSelected: tableSelect,
            onRowsSelect: this.handleSelect.bind(this),
            rowsPerPage: 1,
            count: 100
        };
        let tableData = [];
        accounts.map(val => {
            let handleVal = {
                ...val,
                email: (
                    <Link to={`/user-accounts/edit?userId=${val.id}`}>
                        <div style={{ color: "#2F80ED", cursor: "pointer" }}>
                            {val.email}
                        </div>
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

const mapStateToProps = state => {
    console.log(state);
    return {};
};

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAccounts);
