import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

type SummaryFieldProps = {
  title: string;
  value: string | number | 'daily' | 'weekly' | 'monthly';
};

const SummaryField = ({ title, value }: SummaryFieldProps) => (
  <InputGroup className="my-3 ">
    <InputGroup.Prepend>
      <InputGroup.Text>{title}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl disabled value={value || ''} />
  </InputGroup>
);

export default SummaryField;
