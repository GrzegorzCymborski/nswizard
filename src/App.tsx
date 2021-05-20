import React, { useEffect } from 'react';
import Board from './app/boards/Board';
import GameModal from './app/gameModal/GameModal';
import Mainwrapper from './app/mainWrapper/MainWrapper';
import ScoreTable from './app/scoreTable/ScoreTable';
import StartScreen from './app/startScreen/StartScreen';
import { useReduxHook } from './hooks/useReduxHook';

export const App = () => {
  const {
    openedCard,
    matched,
    isNewGame,
    isEndGame,
    isGameWon,
    cardFliping,
    pairMatch,
    saveMatched,
    scoresVisible,
    handleGameWon
  } = useReduxHook();

  useEffect(() => {
    if (pairMatch) saveMatched();
    if (openedCard.length === 2) cardFliping();
  }, [openedCard]);

  useEffect(() => {
    if (isGameWon) handleGameWon();
  }, [matched, matched]);

  return (
    <Mainwrapper>
      {isNewGame && <Board />}
      {!isNewGame && !scoresVisible && <StartScreen />}
      {!isNewGame && scoresVisible && <ScoreTable />}
      <GameModal show={isEndGame} />
    </Mainwrapper>
  );
};
