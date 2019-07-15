import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Route from "./routes";
import store from "./store";

import "./i18n.js";

import "./style/main.scss";

const outerTheme = createMuiTheme({
    overrides: {
        MuiStepConnector: {
            lineVertical: {
                "min-height": "70px"
            }
        },
        MuiStepper: {
            root: {
                backgroundColor: "#e5e5e5"
            }
        },
        MuiStepLabel: {
            root: {
                cursor: "pointer !important"
            }
        }
    },
    palette: {
        primary: { main: "#2C3250" }
    }
});

const App = () => {
    return (
        <MuiThemeProvider theme={outerTheme}>
            <Provider store={store}>
                <Route />
            </Provider>
        </MuiThemeProvider>
    );
};

export default App;
