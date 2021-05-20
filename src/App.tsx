import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Board from './components/Boards/Board';
import GameModal from './components/GameModal/GameModal';
import { useAppSelector } from './redux/hooks/reduxHooks';
import {
  clearOpenCard,
  setCardsArray,
  setClickBlocked,
  setMatched,
  resetGame,
  setIsEndGame,
  startNewGame
} from './redux/project';

const App = () => {
  const dispatch = useDispatch();

  const mixAndSort = (num: number) => {
    const cardsArr = [...Array(num).keys()].map((i) => i + 1);
    return [...cardsArr, ...cardsArr].sort(() => Math.random() - 0.5);
  };

  const handleStartGame = () => {
    dispatch(startNewGame());
    dispatch(setCardsArray(mixAndSort(8)));
  };

  const handleResetGame = () => {
    dispatch(resetGame());
    dispatch(setCardsArray(mixAndSort(8)));
  };
  const {
    projectData: { mixedArray, openedCard, matched, isNewGame, isEndGame }
  } = useAppSelector((state) => state);

  useEffect(() => {

    const [first, second] = openedCard;
    const firstMatched = mixedArray[first];
    const secondMatched = mixedArray[second];

    if (secondMatched && firstMatched === secondMatched) {
      if (!matched.includes(secondMatched)) {
        dispatch(setMatched([...matched, firstMatched]));
      }
    }

    if (openedCard.length === 2) {
      dispatch(setClickBlocked(true));
      setTimeout(() => {
        dispatch(clearOpenCard());
        dispatch(setClickBlocked(false));
      }, 500);
    }
  }, [openedCard]);

  useEffect(() => {
    if (matched.length === mixedArray.length / 2 && matched.length) {
      dispatch(setIsEndGame());
    }
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
