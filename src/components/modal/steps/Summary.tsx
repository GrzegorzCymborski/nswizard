import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { User, createUser } from '../../../sdk';
import FinishSubmitButton from '../../finishSubmitButton/FinishSubmitButton';
import SubmitButton from '../../submitButton/SubmitButton';
import SummaryField from '../../summaryField/SummaryField';

const Summary = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const { projectData } = useAppSelector<{ projectData: User }>((state) => state as any);

  const submitValues = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsError(false);

    try {
      setLoading(true);
      const response = await createUser((projectData as unknown) as User);
      setLoading(false);

      if (response && !isError && !loading) {
        setAccountCreated(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Form onSubmit={submitValues}>
        {isError && <Alert variant="danger">Something went wrong, please try again</Alert>}

        <SummaryField title="Name" value={projectData.name} />
        <SummaryField title="Phone" value={projectData.phoneNumber} />
        <SummaryField title="Age" value={projectData.age} />
        <SummaryField title="Email address" value={projectData.email} />
        <SummaryField title="Newsletter" value={projectData.newsletter} />

        <SubmitButton loading={loading} disabled={accountCreated} />
        <FinishSubmitButton afterCreateAccount={accountCreated} />
      </Form>
    </>
  );
};

export default Summary;
