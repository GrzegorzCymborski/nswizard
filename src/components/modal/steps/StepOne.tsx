import { useFormik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { getAge, getName, getPhone } from '../../../redux/project';
import { Values } from '../../../types';
import { firstStepSchema } from '../../../yup/firstStep';
import FinishSubmitButton from '../../finishSubmitButton/FinishSubmitButton';
import FormField from '../../formField/FormField';

const StepOne = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { projectData } = useAppSelector((state) => state);

  const submitValues = (values: Values) => {
    const { name, phone, age } = values;
    dispatch(getName(name));
    dispatch(getPhone(phone));
    dispatch(getAge(age));
    history.push('./step2');
  };

  const { touched, errors, handleChange, handleSubmit, values, handleBlur } = useFormik({
    initialValues: {
      name: projectData.name || '',
      phone: projectData.phoneNumber || "",
      age: projectData.age || ''
    },
    onSubmit: (val) => submitValues(val as Values),
    validationSchema: firstStepSchema,
    validateOnChange: false
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormField
          errorName={errors.name}
          errorVisible={!!(touched.name && errors.name)}
          isValid={!!(touched.name && !errors.name)}
          isInvalid={!!(touched.name && errors.name)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          id="name"
          placeholder="Please enter your name"
          title="Name"
          values={values.name}
        />
        <FormField
          errorName={errors.phone}
          errorVisible={!!(touched.phone && errors.phone)}
          isValid={!!(touched.phone && !errors.phone)}
          isInvalid={!!(touched.phone && errors.phone)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          id="phone"
          placeholder="Please enter your phone number"
          title="Phone number"
          type="number"
          values={values.phone as string}
        />
        <FormField
          errorName={errors.age}
          errorVisible={!!(touched.age && errors.age)}
          isValid={!!(touched.age && !errors.age)}
          isInvalid={!!(touched.age && errors.age)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          id="age"
          placeholder="Please enter your age"
          title="Age"
          type="number"
          values={values.age}
        />

        <Button variant="primary" block type="submit">
          Next
        </Button>
        <FinishSubmitButton afterCreateAccount />
      </Form>
    </>
  );
};

export default StepOne;
