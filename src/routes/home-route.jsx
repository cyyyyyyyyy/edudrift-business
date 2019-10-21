import React from "react";
import { Switch, Route } from "react-router-dom";

import NbOverview from "../views/nb-overview";
import NbProgram from "../views/nb-program";

const HomeRoute = () => (
  <Switch>
    <Route path="/nb-program" component={NbProgram} />
    <Route path="/" component={NbOverview} />
  </Switch>
);

export default HomeRoute;
