import React, {Component} from 'react';
import Signup from './authentication/Signup';
import './App.css';

class App extends Component{
      constructor (){
        super()
        this.state = {name: ""}
      this.nameChange = this.nameChange.bind(this)
    }
    nameChange (name){
      console.log("the name change event is set up correctly")
      this.setState({name: name})
    }

  render(){
    return(
      <div className = "App">
        <div id="navbar">
          Welcome to our Site {this.state.name}
          </div>
      <Signup onSubmitSignup={this.nameChange}/>
      </div>
    );
  }
}

export default App;
