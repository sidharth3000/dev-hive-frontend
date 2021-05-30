import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Feed from './container/Feed/Feed';
import User from './container/User/User';

class App extends Component{
  render(){

    return(
        <div>
          <Switch>
            <Route path='/' exact component={Feed}/>
            <Route path='/' exact component={Feed}/>
            <Route path='/user' exact component={User}/>
            <Route path='/news' exact component={Feed}/>
            <Route path='/chat' exact component={Feed}/>
            <Route path='/auth' exact component={Feed}/>
            
          </Switch>
        </div>
    )
  }
}

export default App;