import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Board from './components/Boards/Board';
import GameModal from './components/GameModal/GameModal';
import ScoreTable from './components/ScoreTable/ScoreTable';
import StartScreen from './components/StartScreen/StartScreen';
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
    isGameWon,
    cardFliping,
    pairMatch,
    saveMatched,
    gameScore,
    handleSaveScore,
    scoresVisible
  } = UseReduxHook();

  useEffect(() => {
    if (pairMatch) saveMatched();
    if (openedCard.length === 2) cardFliping();
  }, [openedCard]);

  useEffect(() => {
    if (isGameWon) {
      handleSaveScore();
      dispatch_endGame();
    }
  }, [matched, matched]);

  return (
    <Container className="container-wrapper flex-column" fluid>
      {isNewGame && <Board cardsArray={mixedArray} matched={matched} openedCard={openedCard} score={gameScore} />}
      {!isNewGame && !scoresVisible && <StartScreen />}
      {!isNewGame && scoresVisible && <ScoreTable />}
      <GameModal isEndGame={isEndGame} handleResetGame={handleResetGame} />
    </Container>
  );
};

export default App;
