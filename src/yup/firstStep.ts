import * as yup from 'yup';

export const firstStepSchema = yup.object({
  name: yup.string().required('Name is required ').min(2, 'Minimum 2 chars').max(20, 'Max 20 chars'),
  phone: yup.string().required('Phone number is required ').min(5, 'Minimum 5 digits').max(20, 'Max 20 digits'),
  age: yup
    .string()
    .required('Age is required ')
    .test('validator', 'Sorry you are too old 👴', (value) => {
      return parseInt(value!) > 105 ? false : true;
    })
    .test('validator', 'Sorry you are too young 👶', (value) => {
      return parseInt(value!) < 8 ? false : true;
    })
});
