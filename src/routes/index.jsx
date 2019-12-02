import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "views/home";
import NbIndex from "views/nb-index";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={NbIndex} />
    </Switch>
  </Router>
);

export default Routes;
