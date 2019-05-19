import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "views/sign-in";
import SignUp from "views/sign-up";
import PersonalInformation from "views/personal-information";
import Info from 'views/info';

const MainRoute = () => (
    <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/personal-information" component={PersonalInformation} />
        <Route path="/info" component={Info} />
    </Switch>
);

export default MainRoute;
