import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
      logTheEventOnUsersClick(e){
      console.log('event', e)
     }

    render() {
      return (
          <div className="Login">
          <p>Hello this is my name</p>
          <button onCLick={this.logTheEventOnUsersClick}>CLICK ME!</button>

          </div>
      );
  }
}

export default Login;
