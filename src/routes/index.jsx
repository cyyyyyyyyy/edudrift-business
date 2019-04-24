import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Basic from '../views/basic';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" component={Basic}/>
        </Switch>
    </Router>
);

export default Routes;
