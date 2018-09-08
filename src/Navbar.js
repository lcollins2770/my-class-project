import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    (localStorage.getItem ("name")) ? this.name = localStorage.getItem ("name") : this.name ="";
  }
render(){
  return (
    <div id="navbar">
        Share all things
        {this.name}
  
    </div>


  );

}
}
export default Navbar;
