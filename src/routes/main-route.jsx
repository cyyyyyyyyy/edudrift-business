import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MainRoute = () => (
    <Router>
        <Switch>
            <Route path="/sign-in"/>
            <Route path="/user-accounts"/>
            <Route path="/client"/>
            <Route path="/institutional"/>
            <Route path="/travel-partners"/>
        </Switch>
    </Router>
);

export default MainRoute;
