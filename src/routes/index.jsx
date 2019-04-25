import React from 'react';
import { HashRouter  as Router, Route, Switch } from 'react-router-dom';

import Basic from '../views/basic';

const Routes = () => (
    <Router>
        <div>
            <Route path="/" component={Basic}/>
        </div>
    </Router>
);

export default Routes;
