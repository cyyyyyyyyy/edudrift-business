import React from "react";
import { Route, Switch } from "react-router-dom";

import MyProfileModule from "views/my-profile";

const InfoRoute = () => (
    <Switch>
        <Route path="/info/my-profile" component={MyProfileModule} />
    </Switch>
);

export default InfoRoute;
