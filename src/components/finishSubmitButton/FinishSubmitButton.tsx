import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getClean } from '../../redux/project';

const FinishSubmitButton = ({ afterCreateAccount }: { afterCreateAccount: boolean }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      {afterCreateAccount ? (
        <Button variant="primary" block onClick={() => dispatch(getClean())}>
          Close this modal
        </Button>
      ) : (
        <Button variant="primary" block onClick={() => history.goBack()}>
          Go back
        </Button>
      )}
    </>
  );
};

export default FinishSubmitButton;
