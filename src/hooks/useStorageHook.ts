import { useAppSelector } from '../redux/hooks/reduxHooks';

export const useStorageHook = () => {
  const {
    projectData: { gameScore, userName }
  } = useAppSelector((state) => state);

  const savedScores = localStorage.getItem('highscore table') || '[]';
  const highscores = [...JSON.parse(savedScores)].sort((b, a) => b.score - a.score).slice(0, 5);

  const handleSaveScore = () => {
    const userScore = { userName: userName, score: gameScore };
    const scoreTable = [...JSON.parse(savedScores), userScore];
    localStorage.setItem('highscore table', JSON.stringify(scoreTable));
  };

  return {
    gameScore,
    handleSaveScore,
    savedScores,
    highscores
  };
};
