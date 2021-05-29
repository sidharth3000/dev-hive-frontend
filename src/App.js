import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Feed from './container/Feed/Feed';

class App extends Component{
  render(){

    return(
        <div>
          <Switch>
            <Route to='/' exact component={Feed}/>
            <Route to='/' exact component={Feed}/>
            <Route to='/news' exact component={Feed}/>
            <Route to='/chat' exact component={Feed}/>
            <Route to='auth' exact component={Feed}/>
          </Switch>
        </div>
    )
  }
}

export default App;