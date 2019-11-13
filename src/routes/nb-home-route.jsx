import React from "react";
import { Switch, Route } from "react-router-dom";

import NbOverview from "../views/nb-overview";
import NbCreateProgram from "../views/nb-create-program";

const HomeRoute = () => (
  <Switch>
    <Route path="/nb-home/create" component={NbCreateProgram} />
    <Route path="/nb-home" component={NbOverview} />
  </Switch>
);

export default HomeRoute;
