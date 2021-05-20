import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import { useReduxHook } from '../../hooks/useReduxHook';
import { useStorageHook } from '../../hooks/useStorageHook';

const ScoreTable = () => {
  const { toggleScoreBoard } = useReduxHook();
  const { highscores } = useStorageHook();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body className="d-flex flex-column">
        {highscores.length ? (
          <>
            <Card.Title className="text-center">Best 5 players!</Card.Title>
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
          </>
        ) : (
          <Card.Title className="text-center">Highscore board is empty 🙉</Card.Title>
        )}
        <Button onClick={toggleScoreBoard}>go back</Button>
      </Card.Body>
    </Card>
  );
};

export default ScoreTable;
