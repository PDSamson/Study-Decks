import React, { Component } from 'react';

class DeckForm extends Component {
  constructor(props) {
    super(props)
    this.state = { titleValue: '',
      answerValue: ''
    }
  }

  handleButtonClick = (event) => {
    event.preventDefault()

    this.props.addDeckAction(
      this.state.titleValue,
      this.state.answerValue
    )

    this.setState({ titleValue: event.target.value })
    this.setState({ answerValue: event.target.value })
  }

  handleTitleChange = (event) => {
    this.setState({ titleValue: event.target.value })
  }
  handleAnswerChange = (event) => {
    this.setState({ answerValue: event.target.value })
  }
  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="title"
          value={this.state.titleValue}
          onChange={this.handleTitleChange}
        />
        <input type="text" placeholder="description"
          value={this.state.answerValue}
          onChange={this.handleAnswerChange}
        />
        <button className="btn btn-default" onClick={this.handleButtonClick}>
          Add Deck
        </button>
      </div>
    )
  }
}

export default DeckForm
