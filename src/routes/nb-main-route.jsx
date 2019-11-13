import React from "react";
import { Switch, Route } from "react-router-dom";

import NbProgram from "../views/nb-program";
import NbHome from "../views/nb-home";

const MainRoute = () => (
  <Switch>
    <Route path="/nb-program" component={NbProgram} />
    <Route path="/nb-home" component={NbHome} />
  </Switch>
);

export default MainRoute;
