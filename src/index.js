import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter, Route} from "react-router-dom";
import Layout from "./js/pages/layout"

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Quicksand, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <BrowserRouter>
      <Route path="/" component={Layout}>
      </Route>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
