import React, { Component } from 'react';

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = { emailValue: '',
      passwordValue: ''}
  }

  handleButtonClick = (event) => {
    event.preventDefault()

    this.props.signInAction(
      this.state.emailValue,
      this.state.passwordValue
    )

    this.setState({ emailValue: event.target.value })
    this.setState({ passwordValue: event.target.value })
  }

  handleEmailChange = (event) => {
    this.setState({ emailValue: event.target.value })
  }
  handlePasswordChange = (event) => {
    this.setState({ passwordValue: event.target.value })
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
        <button className="btn btn-default" onClick={this.handleButtonClick}>
          Sign In
        </button>
      </div>
    )
  }
}

export default SignInForm
