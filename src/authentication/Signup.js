import React, { Component } from 'react';

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {name: ""}
    this.handleNameChange = this.handleNameChange.bind (this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind (this)

  }
      handleNameChange(event){
        this.setState({name: event.target.value})
      }

      handleEmailChange(event){
        this.setState({name: event.target.value})
      }

        handleSignupSubmit(event){
        event.preventDefault()
        this.props.onSubmitSignup(this.state.name);
        //alert('You are signing up as ${this.state.name}')
      }
      render() {
        return (
          <form>
            <label>Name</label>
            <input type="text" onChange={this.handleNameChange}></input>
            <button id="submitButton" onClick={this.handleSignupSubmit}>Submit</button>

            <label>Email</label>
            <input type="text" onChange={this.handleEmailChange}></input>
            <button id="submitButton" onClick={this.handleSignupSubmit}>Submit</button>

          </form>
        );
      }
}
export default Signup;
