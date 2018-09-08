import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
  constructor() {
    super();
    (localStorage.getItem ("name")) ? this.name = localStorage.getItem ("name") : this.name ="";
  }
render(){
  return (
    <div id="contact">
        Share all things
        {this.name}
    <div class="space">
            This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content This is content
            {this.name}
        </div>
    </div>


  );

}
}
export default Contact;
