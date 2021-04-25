import * as yup from 'yup';
import { newsletter } from '../types';

export const secondStepSchema = yup.object({
  email: yup.string().email().required('Email address is required ').min(2, 'Minimum 2 chars').max(25, 'Max 15 chars'),
  newsletter: yup.string().required().oneOf(newsletter,"Please select option").nullable()
});
