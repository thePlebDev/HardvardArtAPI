import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import GlobalStyle from './Stylings/global.js'

import {createStore} from "redux";
import rootReducer from "../reducers/index" //THIS ISNT REAL YET

import App from './Components/App'

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Provider>
      <App/>
      </Provider>
    </Router>
  </React.StrictMode>, document.getElementById('root'))
