import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Stylings/global.js'

import App from './Components/App'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>, document.getElementById('root'))
