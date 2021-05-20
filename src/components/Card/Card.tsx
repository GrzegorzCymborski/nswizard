import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/reduxHooks';
import { setGameScore, setOpenedCard } from '../../redux/project';

type CardProps = {
  isFlipped: boolean;
  index: number;
  card: number;
};

const url = 'https://picsum.photos/20';

const CardElement = ({ index, isFlipped, card }: CardProps) => {
  const dispatch = useDispatch();

  const {
    projectData: { clickBlocked, openedCard }
  } = useAppSelector((state) => state);

  function flipCard(index: number) {
    dispatch(setGameScore())
    if (!clickBlocked && index !== openedCard[0]) {
      dispatch(setOpenedCard(index));
    }
  }

  return (
    <div className={`picture-card ${isFlipped ? 'flipped' : ''} `} key={index} onClick={() => flipCard(index)}>
      <div className="inner">
        <div className="front" style={{ backgroundImage: `url(${url}${card})` }}></div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default CardElement;
