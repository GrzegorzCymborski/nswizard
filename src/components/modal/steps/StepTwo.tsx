import { useFormik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { getEmail, getNewsletter } from '../../../redux/project';
import { newsletter, Values } from '../../../types';
import { secondStepSchema } from '../../../yup/secondStep';
import FormField from '../../formField/FormField';

const StepTwo = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { projectData } = useAppSelector((state) => state);

  const submitValues = (values: Values) => {
    dispatch(getEmail(values.email));
    dispatch(getNewsletter(values.newsletter));
    history.push('./summary');
  };

  const { touched, errors, handleChange, handleSubmit, values, handleBlur } = useFormik({
    initialValues: {
      email: projectData.email || '',
      newsletter: projectData.newsletter || null
    },
    onSubmit: (val) => submitValues(val as Values),
    validationSchema: secondStepSchema,
    validateOnChange: false
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormField
          errorName={errors.email}
          errorVisible={!!(touched.email && errors.email)}
          isValid={!!(touched.email && !errors.email)}
          isInvalid={!!(touched.email && errors.email)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          id="email"
          placeholder="Please enter your email"
          title="Email address"
          values={values.email}
        />
        <FormField
          errorName={errors.newsletter}
          errorVisible={!!(touched.newsletter && errors.newsletter)}
          isValid={!!(touched.newsletter && !errors.newsletter)}
          isInvalid={!!(touched.newsletter && errors.newsletter)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          id="newsletter"
          title="Newsletter"
          values={values.newsletter as string}
          as="select"
        >
          <>
            <option>Select one</option>
            {newsletter.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </>
        </FormField>

        <Button variant="primary" block type="submit">
          Next
        </Button>
        <Button variant="primary" block onClick={() => history.goBack()}>
          Go back
        </Button>
      </Form>
    </>
  );
};

export default StepTwo;
