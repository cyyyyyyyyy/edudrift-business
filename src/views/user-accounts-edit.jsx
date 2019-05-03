import React from "react";
import { withI18n } from "react-i18next";
import UserAccountsAdd from "./user-accounts-add";

const user = {
    email: "asdad@gmail.com",
    password: "111111",
    clientStatus: "Disabled",
    institutionStatus: "Disabled",
    travelStatus: "Disabled",
    competitionStatus: "Disabled"
};

@withI18n()
class UserAccountsEdit extends React.Component {
    render() {
        return <UserAccountsAdd user={user} edit={true} />;
    }
}

export default UserAccountsEdit;
