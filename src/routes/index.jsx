import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Basic from "views/basic";

const Routes = () => (
    <Router>
        <div>
            <Route path="/" component={Basic} />
        </div>
    </Router>
);

export default Routes;
