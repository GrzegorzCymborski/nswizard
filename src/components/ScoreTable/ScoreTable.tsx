import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import UseReduxHook from '../../hooks/useReduxHook';

const ScoreTable = () => {
  const { toggleScoreBoard } = UseReduxHook();
  const savedScores = localStorage.getItem('highscore table') || '[]';
  const highscores = [...JSON.parse(savedScores)].sort((b, a) => b.score - a.score).slice(0, 5);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Best 5 players!</Card.Title>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Moves</th>
            </tr>
          </thead>
          <tbody>
            {highscores.map((i, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{i.userName}</td>
                <td>{i.score}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button onClick={toggleScoreBoard}>go back</Button>
      </Card.Body>
    </Card>
  );
};

export default ScoreTable;
