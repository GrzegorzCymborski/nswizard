import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type GameModalProps = {
  isEndGame: boolean;
  handleResetGame: () => void;
};

const GameModal = ({ isEndGame, handleResetGame }: GameModalProps) => {
  return (
    <Modal show={isEndGame}>
      <Modal.Body className="text-center">You win!</Modal.Body>
      <Modal.Footer className="d-flex justify-content-around">
        <Button variant="secondary" onClick={handleResetGame}>
          Main menu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameModal;
