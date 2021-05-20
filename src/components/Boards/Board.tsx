import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import CardElement from '../Card/Card';

type BoardProps = {
  cardsArray: number[];
  openedCard: number[];
  matched: number[];
  score: number;
};

const Board = ({ cardsArray, openedCard, matched, score }: BoardProps) => {
  return (
    <>
      <Alert variant="primary">Score: {score}</Alert>
      <Card className="card-wrapper">
        {cardsArray.map((card, index) => {
          let isFlipped = false;
          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(card)) isFlipped = true;
          return <CardElement card={card} index={index} isFlipped={isFlipped} key={index} />;
        })}
      </Card>
    </>
  );
};

export default Board;
