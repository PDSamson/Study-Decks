import React, { Component } from 'react';

class CardForm extends Component {
  constructor(props) {
    super(props)
    this.state = { questionValue: '',
      answerValue: ''
    }
  }

  handleButtonClick = (event) => {
    event.preventDefault()

    this.props.addCardAction(
      this.state.questionValue,
      this.state.answerValue
    )

    this.setState({ questionValue: event.target.value })
    this.setState({ answerValue: event.target.value })
  }

  handleQuestionChange = (event) => {
    this.setState({ questionValue: event.target.value })
  }
  handleAnswerChange = (event) => {
    this.setState({ answerValue: event.target.value })
  }
  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="question"
          value={this.state.questionValue}
          onChange={this.handleQuestionChange}
        />
        <input type="text" placeholder="answer"
          value={this.state.answerValue}
          onChange={this.handleAnswerChange}
        />
        <button className="btn btn-default" onClick={this.handleButtonClick}>
          Add Card
        </button>
      </div>
    )
  }
}

export default CardForm
