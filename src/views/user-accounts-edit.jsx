import React from "react";
import { withI18n } from "react-i18next";
import queryString from "query-string";

import UserAccountsAdd from "./user-accounts-add";
import { getAccountsById } from "request/accounts";

@withI18n()
class UserAccountsEdit extends React.Component {
    state = {
        render: false,
        user: {}
    };

    componentWillMount() {
        const values = queryString.parse(this.props.location.search);
        getAccountsById(values.userId).then(({ data, success }) => {
            if (success) {
                this.setState({
                    user: data,
                    render: true
                });
            }
        });
    }

    render() {
        let { user, render } = this.state;
        const userId = queryString.parse(this.props.location.search).userId;
        user = { ...user, password: "***************" };
        return render ? (
            <UserAccountsAdd user={user} edit={true} userId={userId} {...this.props}/>
        ) : null;
    }
}

export default UserAccountsEdit;
