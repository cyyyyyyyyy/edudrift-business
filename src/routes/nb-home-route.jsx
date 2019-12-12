import React from "react";
import { Switch, Route } from "react-router-dom";

import NbOverview from "../views/nb-overview";
import NbCreateProgram from "../views/nb-create-program";
import NbProgram from "../views/nb-program";
import NbUserInfo from "../views/nb-userInfo";

const HomeRoute = () => (
  <Switch>
    <Route path="/business/home/create" component={NbCreateProgram} />
    <Route path="/business/home/user-info" component={NbUserInfo} />
    <Route path="/business/home/program" component={NbProgram} />
    <Route path="/business/home/overview" component={NbOverview} />
  </Switch>
);

export default HomeRoute;
