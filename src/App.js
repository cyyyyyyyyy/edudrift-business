import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Route from "./routes";
import store from "./store";

import "./i18n.js";

import "./style/App.css";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#266BF0"
    }
  },
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
      rounded: {
        "border-radius": "6px"
      }
    },
    MuiFormControlLabel: {
      root: {
        "margin-left": 0,
        "margin-right": 0
      }
    }
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
