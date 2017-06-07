import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import TopNav from './js/components/MaterialNav'
import HomePage from './js/pages/home'
import store from './js/store'
import registerServiceWorker from './js/registerServiceWorker';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Lato, sans-serif',
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
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <BrowserRouter>
                <div>
                    <TopNav/>
                    <Route exact path="/" component={HomePage}/>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
