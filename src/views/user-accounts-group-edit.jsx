import React from "react";
import { withI18n } from "react-i18next";
import UserAccountsGroupAdd from "./user-accounts-group-add";

const user = {
    email: ["asdad@gmail.com", "cccccc@gmail.com"],
    password: "111111",
    clientStatus: "Disabled",
    institutionStatus: "Disabled",
    travelStatus: "Disabled",
    competitionStatus: "Disabled"
};

@withI18n()
class UserAccountsGroupEdit extends React.Component {
    render() {
        return <UserAccountsGroupAdd user={user} edit={true} />;
    }
}

export default UserAccountsGroupEdit;
