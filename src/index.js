import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import GlobalStyle from './Stylings/global.js'


import App from './Components/App'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <App/>
    </Router>
  </React.StrictMode>, document.getElementById('root'))
