import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import CreateAccountButton from './components/createAccountButton/CreateAccountButton';
import MainModal from './components/modal/Modal';

const App = () => {
  return (
    <BrowserRouter>
      <Container className="container-wrapper" fluid>
        <Card className="card-wrapper">
          <CreateAccountButton />
        </Card>
        <MainModal />
      </Container>
    </BrowserRouter>
  );
};

export default App;
