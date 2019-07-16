import React from "react";
import { Route, Switch } from "react-router-dom";

import BpOverview from "views/bp-overview";
import BpDetails from "views/bp-details";
import BpSchedule from "views/bp-schedule";
import BpHighlights from "views/bp-highlights";
import BpAcademic from "views/bp-academic";
import BpEligibility from "views/bp-eligibility";
import BpAccommodation from "views/bp-accommodation";
import BpRegistration from "views/bp-registration";

const BpRoute = () => (
    <Switch>
        <Route path="/business/program/overview" component={BpOverview} />
        <Route path="/business/program/details" component={BpDetails} />
        <Route path="/business/program/schedule" component={BpSchedule} />
        <Route path="/business/program/highlights" component={BpHighlights} />
        <Route path="/business/program/academic" component={BpAcademic} />
        <Route path="/business/program/eligibility" component={BpEligibility} />
        <Route
            path="/business/program/accommodation"
            component={BpAccommodation}
        />
        <Route
            path="/business/program/registration"
            component={BpRegistration}
        />
    </Switch>
);

export default BpRoute;
