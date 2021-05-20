import React from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useReduxHook } from '../../hooks/useReduxHook';
import CardElement from '../card/Card';

const Board = () => {
  const { openedCard, matched, mixedArray, gameScore, handleResetGame } = useReduxHook();

  return (
    <>
      <Button onClick={handleResetGame}>🙈</Button>
      <Alert variant="primary">Moves: {gameScore}</Alert>
      <Card className="card-wrapper">
        {mixedArray.map((card, index) => {
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
