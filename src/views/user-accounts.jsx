import React from "react";
import { withI18n } from "react-i18next";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdTable from "components/EdTable";
import EdEdPagination from "components/EdPagination";

import { getAccounts, searchAccountsByEmail } from "request/accounts";

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
        tableSelect: [],
        total: 0,
        offset: 0,
        page: 1,
        searchEmail: ""
    };

    componentWillMount() {
        this.getAccounts(this.state.page);
    }

    async getAccounts(page) {
        const data = await getAccounts(page);
        if (data && data.success) {
            this.setState({
                accounts: data.data.results,
                total: data.data.count
            });
        }
        return data;
    }

    setSelectVal(e) {
        this.setState({
            selectVal: e.target.value
        });
    }

    goPath() {
        const { selectVal, tableSelect } = this.state;
        const { history } = this.props;
        let ids = [];
        tableSelect.forEach(data => {
            ids.push(data.id);
        });
        if (selectVal === "2") {
            if (ids.length > 0) {
                history.push(`/user-accounts/group-edit?ids=${ids}`);
            } else {
                history.push("/user-accounts/group-edit");
            }
        } else if (selectVal === "1") {
            if (ids.length > 0) {
                history.push(`/user-accounts/delete?ids=${ids}`);
            } else {
                history.push("/user-accounts/delete");
            }
        }
    }

    handleSelect(val, val2) {
        const { accounts } = this.state;
        let arr;
        arr = accounts.filter((user, userIndex) => {
            let flag = false;
            val2.forEach(data => {
                if (userIndex === data.index) {
                    flag = true;
                }
            });
            return flag;
        });
        this.setState({
            tableSelect: arr
        });
    }

    async handleClick(offset) {
        const page = Math.ceil(offset / 15) + 1;
        await this.getAccounts(page);
        this.setState({ offset, page });
    }

    searchChange(e) {
        this.setState({
            searchEmail: e.target.value
        });
    }

    async handleSearch() {
        const { searchEmail, page } = this.state;
        if (searchEmail) {
            const { data, success } = await searchAccountsByEmail(
                this.state.searchEmail
            );
            if (success) {
                this.setState({
                    accounts: data.results,
                    total: data.count
                });
            }
        } else {
            this.getAccounts(page);
        }
    }

    render() {
        const { t } = this.props;
        const { accounts, tableSelect } = this.state;
        const selectIndex = [];
        accounts.forEach((data, index) => {
            tableSelect.forEach(user => {
                if (user.id === data.id) {
                    selectIndex.push(index);
                }
            });
        });

        const options = {
            print: false,
            search: false,
            download: false,
            filter: false,
            viewColumns: false,
            pagination: false,
            selectableRows: "multiple",
            rowsSelected: selectIndex,
            onRowsSelect: this.handleSelect.bind(this)
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
                        <EdInput onChange={this.searchChange.bind(this)} />
                    </li>
                    <li>
                        <EdButton onClick={this.handleSearch.bind(this)}>
                            {t("Search")}
                        </EdButton>
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
                    <EdEdPagination
                        limit={15}
                        offset={this.state.offset}
                        total={this.state.total}
                        size="small"
                        style={{ float: "right" }}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </div>
            </div>
        );
    }
}

export default UserAccounts;
