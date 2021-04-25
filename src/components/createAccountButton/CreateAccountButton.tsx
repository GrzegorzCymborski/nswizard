import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getModalToggle } from '../../redux/project';

const CreateAccountButton = () => {
  const dispatch = useDispatch();

  return (
    <Button variant="primary" onClick={() => dispatch(getModalToggle(true))} className="m-2">
      Create account
    </Button>
  );
};

export default CreateAccountButton;
