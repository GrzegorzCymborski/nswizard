export const newsletter = ['daily', 'weekly', 'monthly'];

export type Values = {
  name: null | string;
  age: null | number;
  email: null | string;
  phone: null | string;
  newsletter: null | 'daily' | 'weekly' | 'monthly';
};
