import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useReduxHook } from '../../hooks/useReduxHook';

const StartScreen = () => {
  const { handleStartGame, dispatch_userName, toggleScoreBoard } = useReduxHook();
  const [playerName, setPlayerName] = useState('');
  const nameLength = playerName.length;

  const handleNameAndStart = () => {
    dispatch_userName(playerName);
    handleStartGame();
  };
  return (
    <Card>
      <Card.Body className="d-flex flex-column ">
        <Card.Title>Welcome to NS Memo!</Card.Title>
        <Form.Group controlId="userName">
          <Form.Control
            type="name"
            placeholder="Please enter your name"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </Form.Group>
        <Button className="mb-2" size="sm" disabled={nameLength < 3} onClick={handleNameAndStart}>
          Start game!
        </Button>
        <Button size="sm" onClick={toggleScoreBoard}>
          Score table
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StartScreen;
