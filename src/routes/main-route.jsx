import React from "react";
import { Route, Switch } from "react-router-dom";

import CuSignIn from "views/cu-sign-in";
import CuSignUp from "views/cu-sign-up";
import CuPersonalInformation from "views/cu-personal-information";
import CuInfo from "views/cu-info";

import BpBasic from "views/bp-basic";

const MainRoute = () => (
    <Switch>
        <Route path="/client/sign-in" component={CuSignIn} />
        <Route path="/client/sign-up" component={CuSignUp} />
        <Route
            path="/client/personal-information"
            component={CuPersonalInformation}
        />
        <Route path="/client/info" component={CuInfo} />

        <Route path="/business/program" component={BpBasic} />
    </Switch>
);

export default MainRoute;
