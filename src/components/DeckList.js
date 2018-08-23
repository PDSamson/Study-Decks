import React from 'react';
import CardList from './CardList'
import Deck from './Deck'
import DeckForm from './DeckForm'
import store from '../store'
import { getDecksFunction, createDeckFunction, deleteDeckFunction }
from '../api';

class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decks: [], deckView: true, feedback: '', viewDeck: null };
  }
  componentDidMount() {
    getDecksFunction()
      .then(data => {
        this.setState({ decks: data.decks })
        if (data.decks === []) {
          this.setState({ feedback: 'You have no decks'})
        }
      })
      .catch(() => {
        this.setState({ feedback: 'Could not get decks'})
      })
  }
  createDeckAction = (newTitle, newAnswer) => {
    const newDeck = {deck:{
      title:newTitle,
      answer:newAnswer
      }
    }
    createDeckFunction(newDeck)
      .then((response) => {
        const addition = response.deck
        this.setState({
          decks: this.state.decks.concat(addition)
        })
        this.setState({ feedback: 'Deck created'})
      })
      .catch(() => {
        this.setState({ feedback: 'Deck creation failed'})
      })
  }
  deleteDeckAction = (id) => {
    deleteDeckFunction(id)
      .then(() => {
        const currentDecks = this.state.decks
        const decks = currentDecks.filter(deck => deck.id !== id)
        this.setState({ decks })
        this.setState({ feedback: 'Deck deleted'})
      })
      .catch(() => {
        this.setState({ feedback: 'Delete failed'})
      })
  }

  setDeckAction = (thisDeck) => {
    this.setState({ viewDeck: thisDeck }, () => {
      this.setState({ deckView: false })
    })
  }

  backToDecksAction = () => {
    this.setState({ deckView: true })
  }

  render() {
    const { deckView } = this.state;
    return (
      <div className="user-page">
        { deckView
          ? <div className="decks-page">
              <div className="response-field">{this.state.feedback}</div>
                <DeckForm addDeckAction={this.createDeckAction} />
                <div className="deck-list">
                  {this.state.decks.map(thisDeck => {
                    return (
                      <Deck
                      key={thisDeck.id}
                      thisDeck={thisDeck}
                      removeDeckAction={this.deleteDeckAction}
                      selectDeck={this.setDeckAction}
                      />
                    );
                  })}
                </div>
              </div>
          : <div className="cards-page">
              <CardList
                myDeck={this.state.viewDeck}
              />
              <div className="content-header">
                <button className="bton" onClick={this.backToDecksAction}>
                  Back to Decks
                </button>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default DeckList;
