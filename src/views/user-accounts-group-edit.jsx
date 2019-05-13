import React from "react";
import { withI18n } from "react-i18next";
import UserAccountsGroupAdd from "./user-accounts-group-add";
import queryString from "query-string";

import { getAccountsByIds } from "request/accounts";

@withI18n()
class UserAccountsGroupEdit extends React.Component {
    state = {
        user: {}
    };

    componentWillMount() {
        const values = queryString
            .parse(this.props.location.search)
            .ids.split(",");
        getAccountsByIds(values).then(({ data }) => {
            let email = [];
            data.forEach(val => {
                email.push(val.email);
            });
            this.setState({
                user: {
                    email: email
                }
            });
        });
    }

    render() {
        const { user } = this.state;
        return <UserAccountsGroupAdd user={user} edit={true} {...this.props} />;
    }
}

export default UserAccountsGroupEdit;
