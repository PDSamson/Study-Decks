import React from 'react';

const Card = ({ thisCard, cardFlipped, cardFlipAction, hitNext, hitPrev }) => {


  const handleButtonClick = (event) => {
    event.preventDefault()
    cardFlipAction()
  }

  const handleNext = (event) => {
    event.preventDefault()
    hitNext()
  }

  const handlePrev = (event) => {
    event.preventDefault()
    hitPrev()
  }

  return (
    <div className="card">
    { cardFlipped
      ? <div className="card-answer card-text">
          {thisCard.answer}
        </div>
      : <div className="card-question card-text">
          {thisCard.question}
        </div>
    }
      <button className="card-bton" onClick={handlePrev}>
        Previous
      </button>
      <button className="card-bton" onClick={handleButtonClick}>
        Flip Card
      </button>
      <button className="card-bton" onClick={handleNext}>
        Next
      </button>
  </div>
  );
};

export default Card;
