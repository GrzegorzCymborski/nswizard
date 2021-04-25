import React, { ReactNode, SyntheticEvent } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

type FormFieldProps = {
  values: string | number;
  handleChange: (e: SyntheticEvent) => void;
  handleBlur: (e: SyntheticEvent) => void;
  title: string;
  placeholder?: string;
  id: string;
  errorName?: string;
  isValid: boolean;
  isInvalid: boolean;
  as?: React.ElementType;
  children?: ReactNode;
  errorVisible: boolean;
  type?: string;
};

const FormField = ({
  isValid,
  isInvalid,
  id,
  title,
  values,
  handleChange,
  handleBlur,
  placeholder,
  errorName,
  children,
  as,
  errorVisible,
  type
}: FormFieldProps) => (
  <div style={{ position: 'relative' }}>
    <label htmlFor={id}>{title}</label>
    <InputGroup className="mb-3">
      <FormControl
        as={as}
        id={id}
        name={id}
        value={values}
        placeholder={placeholder}
        onChange={handleChange}
        isValid={isValid}
        isInvalid={isInvalid}
        onBlur={handleBlur}
        type={type}
      >
        {children}
      </FormControl>
      {errorVisible && <p className="error-info">{errorName}</p>}
    </InputGroup>
  </div>
);

export default FormField;
