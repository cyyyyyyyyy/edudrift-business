import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import style from "./index.module.scss";

const BpAccommodation = props => {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(0);

    return <React.Fragment>12312</React.Fragment>;
};

export default withRouter(BpAccommodation);
