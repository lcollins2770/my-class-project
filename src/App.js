import React, {Component} from 'react';
import Signup from './authentication/Signup';
import './App.css';
import Navbar from './Navbar'
import Router from './Router'



class App extends Component{
      constructor (){
        super()
        this.state = {name: ""}
      this.nameChange = this.nameChange.bind(this)
    }
    nameChange (name){
      this.setState({name: name})
    }

  render(){
    return(
      <div className="App">
          <Navbar/>
          <Signup/>
          <div id="app-container">
              <div id="app-menu-container">Menu goes here</div>
              <Router/>
          </div>

      </div>
    );
  }
}

export default App;
