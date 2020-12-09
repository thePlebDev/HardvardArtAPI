import React from 'react';
import Home from '../Home'
import { Switch,Route } from 'react-router-dom';



const App =()=>{

  return(
    <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={()=> 404} />
    </Switch>
    </div>
  )
}

export default App
