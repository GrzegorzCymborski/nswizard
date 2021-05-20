import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useReduxHook } from '../../hooks/useReduxHook';

const GameModal = ({ show }: { show: boolean }) => {
  const { handleResetGame, gameScore } = useReduxHook();

  return (
    <Modal show={show} centered>
      <Modal.Body className="text-center">You won with {gameScore} moves!</Modal.Body>
      <Modal.Footer className="d-flex justify-content-around">
        <Button variant="secondary" onClick={handleResetGame}>
          back to main menu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameModal;
