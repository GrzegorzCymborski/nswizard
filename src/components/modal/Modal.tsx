import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import { Route } from 'react-router-dom';
import Summary from './steps/Summary';
import { useAppSelector } from '../../redux/hooks/reduxHooks';
import { useHistory } from 'react-router-dom';

const MainModal = () => {
  const {
    projectData: { isModalOpen }
  } = useAppSelector((state) => state);

  const history = useHistory();

  useEffect(() => {
    if (!isModalOpen) {
      history.push('./');
    }
  }, [isModalOpen]);

  return (
    <Modal show={isModalOpen} centered backdrop="static">
      <Modal.Body className="d-flex flex-column">
        <Route exact path="/" component={() => <StepOne />} />
        <Route path="/step2" component={() => <StepTwo />} />
        <Route path="/summary" component={() => <Summary />} />
      </Modal.Body>
    </Modal>
  );
};

export default MainModal;
