import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from '../Home'
import Navigation from '../Navigation';
import ImageIndiv from '../ImageIndiv';





const App =()=>{

  return(
    <div>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/image/:id' component={ImageIndiv} />
        <Route component={()=> 404} />
      </Switch>
    </div>
  )
}

export default App
