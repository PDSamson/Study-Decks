import React from 'react';
import Card from './Card'
import CardForm from './CardForm'
import { getCardsFunction, createCardFunction, deleteCardFunction }
from '../api';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], feedback: '', thisDeck: this.props.myDeck,
                    currentCard: null, cardFlipped: false, titleCard: true,
                  index: 0 };
  }
  componentDidMount() {
    getCardsFunction(this.state.thisDeck.id)
      .then(data => {
        this.setState({ cards: data.cards })
        this.setState({ currentCard: data.cards[0] })
        if (data.cards === []) {
          this.setState({ feedback: 'This deck has no cards'})
        }
      })
      .catch(() => {
        this.setState({ feedback: 'Could not get cards'})
      })
  }
  createCardAction = (newQuestion, newAnswer) => {
    const newCard = {card:{
      question:newQuestion,
      answer:newAnswer,
      deck_id:this.state.thisDeck.id
      }
    }
    createCardFunction(newCard)
      .then((response) => {
        const addition = response.card
        this.setState({
          cards: this.state.cards.concat(addition)
        })
        this.setState({ feedback: 'Card created'})
      })
      .catch(() => {
        this.setState({ feedback: 'Card creation failed'})
      })
  }
  deleteCardAction = (id) => {
    deleteCardFunction(id)
      .then(() => {
        const currentCards = this.state.cards
        const cards = currentCards.filter(card => card.id !== id)
        this.setState({ cards })
        this.setState({ feedback: 'Card deleted'})
      })
      .catch(() => {
        this.setState({ feedback: 'Deletion failed'})
      })
  }
  flipCardAction = () => {
    if (this.state.cardFlipped === false) {
      this.setState({ cardFlipped: true })
    } else {
      this.setState({ cardFlipped: false })
    }
  }

  handleButtonClick = () => {
    if (this.state.cards === []) {
      this.setState({ feedback: 'This Deck is Empty'})
    } else {
      this.setState({ currentCard: this.state.cards[0] }, () => {
        this.setState({ titleCard: false })
      })
    }
  }

  nextCardAction = () => {
    let newIndex = this.state.index
    this.setState({ cardFlipped: false })
    if (this.state.index === this.state.cards.length - 1) {
      newIndex = 0
    } else {
      newIndex += 1
    }
    this.setState({ index: newIndex })
    const newCard = this.state.cards[newIndex]
    this.setState({ currentCard: newCard })
  }

  prevCardAction = () => {
    let newIndex = this.state.index
    this.setState({ cardFlipped: false })
    if (this.state.index === 0) {
      newIndex = this.state.cards.length - 1
    } else {
      newIndex -= 1
    }
    this.setState({ index: newIndex })
    const newCard = this.state.cards[newIndex]
    this.setState({ currentCard: newCard })
  }

  render() {
    const { cardFlipped } = this.state;
    const { titleCard } = this.state;
    return (
      <div className="card-page">
        <div className="response-field">{this.state.feedback}</div>
        <CardForm addCardAction={this.createCardAction} />
        <div className="response-field">{this.state.feedback}</div>
      { titleCard
        ? <div className="card">
            <h1 className="card-text">Deck: {this.state.thisDeck.title}</h1>
            <button className="bton" onClick={this.handleButtonClick}>
              Start Cards
            </button>
          </div>
        : <div className="show-card">
        <Card
          thisCard={this.state.currentCard}
          cardFlipped={this.state.cardFlipped}
          cardFlipAction={this.flipCardAction}
          hitNext={this.nextCardAction}
          hitPrev={this.prevCardAction}
        />
        </div>
      }
      </div>
    );
  }
}

export default CardList;
