import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

type MainWrapperProps = {
  children: ReactNode;
};

const Mainwrapper = ({ children }: MainWrapperProps) => {
  return (
    <Container className="container-wrapper flex-column" fluid>
      {children}
    </Container>
  );
};

export default Mainwrapper;
