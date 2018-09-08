import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './authentication/Signup'
import './router.css';
import Contact from './Contact'



class Router extends Component {

  render() {
    return (
      <div id="router">
      <main>
        <Switch>
          <Route path='/contact' component={Contact}/>
          <Route path='/signup' component={Signup}/>
          </Switch>
          </main>
          </div>
    );

  }


}
export default Router;
