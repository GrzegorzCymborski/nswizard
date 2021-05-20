import React from 'react';
import CardElement from '../Card/Card';

type BoardProps = {
  cardsArray: number[];
  openedCard: number[];
  matched: number[];
};

const Board = ({ cardsArray, openedCard, matched }: BoardProps) => {
  return (
    <>
      {cardsArray.map((card, index) => {
        let isFlipped = false;
        if (openedCard.includes(index)) isFlipped = true;
        if (matched.includes(card)) isFlipped = true;
        return <CardElement card={card} index={index} isFlipped={isFlipped} key={index} />;
      })}
    </>
  );
};

export default Board;
