import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux'

import * as actions from "./store/actions/auth"
import Feed from './container/Feed/Feed';
import User from './container/User/User';
import Auth from './container/Auth/Signup/Signup'

class App extends Component{

  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render(){

    return(
        <div>
          <Switch>
            <Route path='/' exact component={Feed}/>
            <Route path='/' exact component={Feed}/>
            <Route path='/auth' exact component={Auth}/>
            <Route path='/user' exact component={User}/>
            <Route path='/news' exact component={Feed}/>
            <Route path='/chat' exact component={Feed}/>
            <Route path='/auth' exact component={Feed}/>
            
          </Switch>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  }
}

export default connect(null , mapDispatchToProps)(App);
