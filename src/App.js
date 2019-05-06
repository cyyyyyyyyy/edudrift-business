import React from "react";
import { Provider } from "react-redux";

import Route from "./routes";
import store from "./store";

import "./i18n.js";

import "./style/main.scss";

const App = () => {
    return (
        <Provider store={store}>
            <Route />
        </Provider>
    );
};

export default App;
