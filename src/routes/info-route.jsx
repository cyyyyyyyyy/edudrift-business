import React from "react";
import { Route, Switch } from "react-router-dom";

import CuMyProfile from "views/cu-my-profile";

const InfoRoute = () => (
    <Switch>
        <Route path="/client/info/my-profile" component={CuMyProfile} />
    </Switch>
);

export default InfoRoute;
