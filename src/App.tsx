import React, { useEffect } from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Board from './components/Boards/Board';
import { useAppSelector } from './redux/hooks/reduxHooks';
import {
  clearOpenCard,
  setCardsArray,
  setClickBlocked,
  setMatched,
  startNewGame,
  resetGame,
  setIsEndGame
} from './redux/project';

const App = () => {
  const dispatch = useDispatch();

  const mixAndSort = (num: number) => {
    const cardsArr = [...Array(num).keys()].map((i) => i + 1);
    return [...cardsArr, ...cardsArr].sort(() => Math.random() - 0.5);
  };

  const handleResetGame = () => {
    dispatch(resetGame());
    dispatch(startNewGame(true));
    dispatch(setCardsArray(mixAndSort(8)));
  };
  const {
    projectData: { mixedArray, openedCard, matched, isNewGame, isEndGame }
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (openedCard.length < 2) return;

    const firstMatched = mixedArray[openedCard[0]];
    const secondMatched = mixedArray[openedCard[1]];

    if (secondMatched && firstMatched === secondMatched) {
      dispatch(setMatched([...matched, firstMatched]));
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
    if (matched.length === mixedArray.length / 2 && isNewGame) {
      dispatch(setIsEndGame());
    }
  }, [matched, matched]);

  return (
    <Container className="container-wrapper flex-column" fluid>
      {isNewGame && <Button onClick={() => dispatch(setIsEndGame())}>Menu</Button>}
      {!isNewGame && <Button onClick={handleResetGame}>Start game!</Button>}
      {isNewGame && (
        <Card className="card-wrapper">
          <Board cardsArray={mixedArray} matched={matched} openedCard={openedCard} />
        </Card>
      )}
      <Modal show={isEndGame} onHide={() => dispatch(startNewGame(true))}>
        <Modal.Body className="text-center">You win!</Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button variant="secondary" onClick={handleResetGame}>
            Play again
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
