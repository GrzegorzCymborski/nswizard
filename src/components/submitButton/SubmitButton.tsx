import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const SubmitButton = ({ loading, disabled }: { loading: boolean; disabled?: boolean }) => {
  return (
    <Button variant="primary" block type="submit" disabled={loading || disabled}>
      {loading ? (
        <>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          <span> Sending data..</span>
        </>
      ) : disabled ? (
        'Account created'
      ) : (
        'Create account'
      )}
    </Button>
  );
};

export default SubmitButton;
