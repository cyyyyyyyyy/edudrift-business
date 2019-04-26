import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import history from "utils/history";

import Basic from "views/basic";

const Routes = () => (
    <Router history={history}>
        <div>
            <Route path="/" component={Basic} />
        </div>
    </Router>
);

export default Routes;
