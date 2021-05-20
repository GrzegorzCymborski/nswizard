import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Board from './components/Boards/Board';
import GameModal from './components/GameModal/GameModal';
import UseReduxHook from './hooks/useReduxHook';

const App = () => {
  const {
    dispatch_endGame,
    mixedArray,
    openedCard,
    matched,
    isNewGame,
    isEndGame,
    handleResetGame,
    handleStartGame,
    isGameWon,
    cardFliping,
    pairMatch,
    saveMatched
  } = UseReduxHook();

  useEffect(() => {
    if (pairMatch) saveMatched();
    if (openedCard.length === 2) cardFliping();
  }, [openedCard]);

  useEffect(() => {
    if (isGameWon) dispatch_endGame();
  }, [matched, matched]);

  return (
    <Container className="container-wrapper flex-column" fluid>
      {!isNewGame && <Button onClick={handleStartGame}>Start game!</Button>}
      {isNewGame && <Board cardsArray={mixedArray} matched={matched} openedCard={openedCard} />}
      <GameModal isEndGame={isEndGame} handleResetGame={handleResetGame} />
    </Container>
  );
};

export default App;
