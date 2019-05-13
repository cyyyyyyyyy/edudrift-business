import React from "react";
import { withI18n } from "react-i18next";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";

import EdInput from "components/EdInput";
import EdButton from "components/EdButton";
import EdTable from "components/EdTable";
import EdEdPagination from "components/EdPagination";

import { getOrganizers, getOrganizersByEmail } from "request/accounts";

import style from "./user-accounts.module.scss";

const columns = t => [
    { label: t("Email Address"), name: "account", options: { sort: false } },
    {
        label: t("Competition Organiser Name"),
        name: "full_name",
        options: { sort: false }
    },
    {
        label: t("Name of Manager"),
        name: "manager",
        options: { sort: false }
    }
];

@withI18n()
class Competition extends React.Component {
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
        const { success, data } = await getOrganizers(page);
        if (success) {
            const { results } = data;
            let accounts = results.map(val => {
                val.id = val["account_id"];
                return val;
            });
            this.setState({
                accounts: accounts,
                total: data.count
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
            const { data, success } = await getOrganizersByEmail(
                this.state.searchEmail
            );
            if (success) {
                const { results } = data;
                let accounts = results.map(val => {
                    val.id = val["account_id"];
                    return val;
                });
                this.setState({
                    accounts: accounts,
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
                account: (
                    <Link to={`/competition/edit?userId=${val.id}`}>
                        <div style={{ color: "#2F80ED", cursor: "pointer" }}>
                            {val.account}
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

export default Competition;
