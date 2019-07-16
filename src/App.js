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
                background: "none"
            }
        },
        MuiStepLabel: {
            root: {
                cursor: "pointer !important"
            }
        },
        MuiPaper: {
            elevation1: {
                "box-shadow": " 0px 16px 32px rgba(69, 90, 100, 0.4)"
            }
        },
        MuiFormControlLabel: {
            root: {
                "margin-left": 0,
                "margin-right": 0
            }
        },
        MuiCardContent: {
            root: {
                padding: "30px 30px 40px 30px"
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
