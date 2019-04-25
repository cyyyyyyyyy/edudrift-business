import React from "react";
import { HashRouter  as Router, Route, Switch } from "react-router-dom";

import Home from "../views/home";
import ViewSite from "../views/view-site";
import UserAccounts from "../views/user-accounts";
import Client from "../views/client";
import Institutional from "../views/institutional";
import TravelPartners from "../views/travel-partners";
import Competition from "../views/competition";

const MainRoute = () => (
    <Router>
        <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/view-site" component={ViewSite} />
            <Route exact path="/user-accounts" component={UserAccounts} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/institutional" component={Institutional} />
            <Route exact path="/travel-partners" component={TravelPartners} />
            <Route exact path="/competition" component={Competition} />
        </div>
    </Router>
);

export default MainRoute;
