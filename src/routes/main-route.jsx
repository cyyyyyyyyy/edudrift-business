import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "views/home";
import ViewSite from "views/view-site";
import UserAccounts from "views/user-accounts";
import Client from "views/client";
import Institutional from "views/institutional";
import TravelPartners from "views/travel-partners";
import Competition from "views/competition";
import UserAccountsAdd from "views/user-accounts-add";

const MainRoute = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/view-site" component={ViewSite} />
        <Route exact path="/user-accounts" component={UserAccounts} />
        <Route exact path="/user-accounts/add" component={UserAccountsAdd} />
        <Route path="/client" component={Client} />
        <Route path="/institutional" component={Institutional} />
        <Route path="/travel-partners" component={TravelPartners} />
        <Route path="/competition" component={Competition} />
    </Switch>
);

export default MainRoute;
