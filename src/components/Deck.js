import React from 'react';

const Deck = ({ thisDeck, removeDeckAction, selectDeck }) => {


  const handleButtonClick = (event) => {
    event.preventDefault()
    removeDeckAction(thisDeck.id)
  }

  const handleSelection = (event) => {
    event.preventDefault()
    selectDeck(thisDeck)
  }

  return (
    <div className="deck">
      <div className="deck-title">
        {thisDeck.title}
      </div>
      <div className="deck-description">
        {thisDeck.answer}
      </div>
      <button className="bton" onClick={handleButtonClick}>
        Delete Deck
      </button>
      <button className="bton" onClick={handleSelection}>
        View Cards
      </button>
    </div>
  );
};

export default Deck;
