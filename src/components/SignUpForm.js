import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = { emailValue: '',
      passwordValue: '',
      passwordConfirmationValue: ''}
  }

  handleButtonClick = (event) => {
    event.preventDefault()

    this.props.signUpAction(
      this.state.emailValue,
      this.state.passwordValue,
      this.state.passwordConfirmationValue
    )

    this.setState({ emailValue: event.target.value })
    this.setState({ passwordValue: event.target.value })
    this.setState({ passwordConfirmationValue: event.target.value })
  }

  handleEmailChange = (event) => {
    this.setState({ emailValue: event.target.value })
  }
  handlePasswordChange = (event) => {
    this.setState({ passwordValue: event.target.value })
  }
  handlePasswordConfirmationChange = (event) => {
    this.setState({ passwordConfirmationValue: event.target.value })
  }
  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="email"
          value={this.state.emailValue}
          onChange={this.handleEmailChange}
        />
        <input type="text" placeholder="password"
          value={this.state.passwordValue}
          onChange={this.handlePasswordChange}
        />
        <input type="text" placeholder="password confirmation"
          value={this.state.passwordConfirmationValue}
          onChange={this.handlePasswordConfirmationChange}
        />
        <button className="btn btn-default" onClick={this.handleButtonClick}>
          Sign Up
        </button>
      </div>
    )
  }
}

export default SignUpForm
