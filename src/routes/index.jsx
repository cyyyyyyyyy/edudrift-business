import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Basic from "views/basic";

const Routes = () => (
  <Router>
    <div>
      <Route path="/client" component={Basic} />
      <Route path="/business" component={Basic} />
    </div>
  </Router>
);

export default Routes;
