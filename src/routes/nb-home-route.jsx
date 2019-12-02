import React from "react";
import { Switch, Route } from "react-router-dom";

import NbOverview from "../views/nb-overview";
import NbCreateProgram from "../views/nb-create-program";
import NbProgram from "../views/nb-program";
import NbUserInfo from "../views/nb-userInfo";

const HomeRoute = () => (
  <Switch>
    <Route path="/home/create" component={NbCreateProgram} />
    <Route path="/home/user-info" component={NbUserInfo} />
    <Route path="/home/program" component={NbProgram} />
    <Route path="/home/overview" component={NbOverview} />
  </Switch>
);

export default HomeRoute;
