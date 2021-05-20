import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import { mixAndSort } from '../utils/sortArray';
import { useStorageHook } from './useStorageHook';
import {
  startNewGame,
  setCardsArray,
  resetGame,
  setClickBlocked,
  clearOpenCard,
  setIsEndGame,
  setMatched,
  setUserName,
  showScoreBoard,
  setGameScore,
  setOpenedCard
} from '../redux/project';

export const useReduxHook = () => {
  const dispatch = useDispatch();
  const {
    projectData: { mixedArray, openedCard, matched, isNewGame, isEndGame, gameScore, scoresVisible, clickBlocked }
  } = useAppSelector((state) => state);

  const { handleSaveScore } = useStorageHook();

  const [first, second] = openedCard;
  const firstMatched = mixedArray[first];
  const secondMatched = mixedArray[second];
  const pairMatch = secondMatched && firstMatched === secondMatched;
  const isGameWon = matched.length === mixedArray.length / 2 && matched.length;

  const dispatch_endGame = () => dispatch(setIsEndGame());
  const dispatch_userName = (name: string) => dispatch(setUserName(name));
  const dispatch_setGamescore = () => dispatch(setGameScore());
  const dispatch_openedCard = (arg: number) => dispatch(setOpenedCard(arg));

  const handleResetGame = () => {
    dispatch(resetGame());
    dispatch(setCardsArray(mixAndSort(8)));
  };

  const handleStartGame = () => {
    dispatch(startNewGame());
    dispatch(setCardsArray(mixAndSort(8)));
  };

  const cardFliping = () => {
    dispatch(setClickBlocked(true));
    setTimeout(() => {
      dispatch(clearOpenCard());
      dispatch(setClickBlocked(false));
    }, 500);
  };

  const saveMatched = () => {
    if (!matched.includes(secondMatched)) {
      dispatch(setMatched([...matched, firstMatched]));
    }
  };

  const toggleScoreBoard = () => {
    dispatch(showScoreBoard(!scoresVisible));
  };

  const handleGameWon = () => {
    handleSaveScore();
    dispatch_endGame();
  };

  return {
    dispatch_endGame,
    mixedArray,
    openedCard,
    matched,
    gameScore,
    isNewGame,
    isEndGame,
    handleResetGame,
    handleStartGame,
    isGameWon,
    cardFliping,
    pairMatch,
    saveMatched,
    dispatch_userName,
    handleSaveScore,
    toggleScoreBoard,
    scoresVisible,
    handleGameWon,
    dispatch_setGamescore,
    dispatch_openedCard,
    clickBlocked
  };
};
