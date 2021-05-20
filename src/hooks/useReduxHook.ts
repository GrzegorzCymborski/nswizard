import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks/reduxHooks';
import {
  startNewGame,
  setCardsArray,
  resetGame,
  setClickBlocked,
  clearOpenCard,
  setIsEndGame,
  setMatched,
  setUserName,
  showScoreBoard
} from '../redux/project';

const UseReduxHook = () => {
  const dispatch = useDispatch();
  const {
    projectData: { mixedArray, openedCard, matched, isNewGame, isEndGame, gameScore, userName, scoresVisible }
  } = useAppSelector((state) => state);

  const [first, second] = openedCard;
  const firstMatched = mixedArray[first];
  const secondMatched = mixedArray[second];
  const pairMatch = secondMatched && firstMatched === secondMatched;
  const isGameWon = matched.length === mixedArray.length / 2 && matched.length;

  const mixAndSort = (num: number) => {
    const cardsArr = [...Array(num).keys()].map((i) => i + 1);
    return [...cardsArr, ...cardsArr].sort(() => Math.random() - 0.5);
  };

  const dispatch_newGame = () => dispatch(startNewGame());
  const dispatch_cardsArr = () => dispatch(setCardsArray(mixAndSort(2)));
  const dispatch_resetGame = () => dispatch(resetGame());
  const dispatch_blockClick = () => dispatch(setClickBlocked(true));
  const dispatch_unblockClick = () => dispatch(setClickBlocked(false));
  const dispatch_clearOpenCard = () => dispatch(clearOpenCard());
  const dispatch_endGame = () => dispatch(setIsEndGame());
  const dispatch_userName = (name: string) => dispatch(setUserName(name));

  const handleResetGame = () => {
    dispatch_resetGame();
    dispatch_cardsArr();
  };

  const handleStartGame = () => {
    dispatch_newGame();
    dispatch_cardsArr();
  };

  const cardFliping = () => {
    dispatch_blockClick();
    setTimeout(() => {
      dispatch_clearOpenCard();
      dispatch_unblockClick();
    }, 500);
  };

  const saveMatched = () => {
    if (!matched.includes(secondMatched)) {
      dispatch(setMatched([...matched, firstMatched]));
    }
  };

  const handleSaveScore = () => {
    const savedScores = localStorage.getItem('highscore table') || '[]';
    const userScore = { userName: userName, score: gameScore };
    const highscores = [...JSON.parse(savedScores), userScore].sort((b, a) => b.score - a.score);
    localStorage.setItem('highscore table', JSON.stringify(highscores));
  };

  const toggleScoreBoard = () => {
    dispatch(showScoreBoard(!scoresVisible));
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
    scoresVisible
  };
};

export default UseReduxHook;
