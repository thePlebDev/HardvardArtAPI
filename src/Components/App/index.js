import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from '../Home'
import Navigation from '../Navigation';





const App =()=>{

  return(
    <div>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={()=> 404} />
      </Switch>
    </div>
  )
}

export default App
