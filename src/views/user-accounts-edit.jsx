import React from "react";
import { withI18n } from "react-i18next";
import queryString from "query-string";

import EdButton from "components/EdButton";
import UserAccountsAdd from "./user-accounts-add";
import { getAccountsById } from "request/accounts";

@withI18n()
class UserAccountsEdit extends React.Component {
    state = {
        userId: queryString.parse(this.props.location.search).userId,
        user: {}
    };

    componentWillMount() {
        getAccountsById(this.state.userId).then(({ data, success }) => {
            if (success) {
                this.setState({
                    user: data
                });
            }
        });
    }

    handleClick() {
        const { user, userId } = this.state;
        this.props.history.push(
            `/user-accounts/change-password?email=${
                user.email
            }&userId=${userId}`
        );
    }

    render() {
        let { user } = this.state;
        const { t } = this.props;
        const userId = queryString.parse(this.props.location.search).userId;
        user = { ...user, password: "***************" };
        return [
            <UserAccountsAdd
                user={user}
                edit={true}
                userId={userId}
                {...this.props}
            />,
            <EdButton
                style={{ position: "absolute", right: 150, top: 112 }}
                onClick={this.handleClick.bind(this)}
            >
                {t("Edit Password")}
            </EdButton>
        ];
    }
}

export default UserAccountsEdit;
