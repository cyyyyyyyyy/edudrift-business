import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "views/home";
import ViewSite from "views/view-site";
import UserAccounts from "views/user-accounts";
import Client from "views/client";
import ClientEdit from "views/client-edit";
import Institutional from "views/institutional";
import InstitutionalEdit from "views/institutional-edit";
import Competition from "views/competition";
import CompetitionEdit from "views/competition-edit";
import UserAccountsAdd from "views/user-accounts-add";
import UserAccountsGroupAdd from "views/user-accounts-group-add";
import UserAccountsEdit from "views/user-accounts-edit";
import UserAccountsGroupEdit from "views/user-accounts-group-edit";
import UserAccountsDelete from "views/user-accounts-delete";
import UserAccountsChangePassword from "views/user-accounts-change-password";

const MainRoute = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/view-site" component={ViewSite} />
        <Route exact path="/user-accounts" component={UserAccounts} />
        <Route exact path="/user-accounts/add" component={UserAccountsAdd} />
        <Route
            exact
            path="/user-accounts/group-add"
            component={UserAccountsGroupAdd}
        />
        <Route exact path="/user-accounts/edit" component={UserAccountsEdit} />
        <Route
            exact
            path="/user-accounts/change-password"
            component={UserAccountsChangePassword}
        />
        <Route
            exact
            path="/user-accounts/group-edit"
            component={UserAccountsGroupEdit}
        />
        <Route
            exact
            path="/user-accounts/delete"
            component={UserAccountsDelete}
        />
        <Route exact path="/client" component={Client} />
        <Route exact path="/client/edit" component={ClientEdit} />
        <Route exact path="/institutional" component={Institutional} />
        <Route exact path="/institutional/edit" component={InstitutionalEdit} />
        <Route exact path="/competition" component={Competition} />
        <Route exact path="/competition/edit" component={CompetitionEdit} />
    </Switch>
);

export default MainRoute;
