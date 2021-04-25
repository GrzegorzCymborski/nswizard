import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  name: null | string;
  age: null | number;
  email: null | string;
  phoneNumber: null | string;
  newsletter: null | 'daily' | 'weekly' | 'monthly';
  isModalOpen: boolean;
};

const initialState: InitialStateProps = {
  name: null,
  age: null,
  email: null,
  phoneNumber: null,
  newsletter: null,
  isModalOpen: false
};

export const counterSlice = createSlice({
  name: 'user data',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getAge: (state, action) => {
      state.age = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPhone: (state, action) => {
      state.phoneNumber = action.payload;
    },
    getNewsletter: (state, action) => {
      state.newsletter = action.payload;
    },
    getModalToggle: (state, action) => {
      state.isModalOpen = action.payload;
    },
    getClean: (state) => {
      state.isModalOpen = false;
      state.name = null;
      state.age = null;
      state.email = null;
      state.phoneNumber = null;
      state.newsletter = null;
    }
  }
});

export const { getName, getAge, getEmail, getPhone, getNewsletter, getModalToggle, getClean } = counterSlice.actions;
export default counterSlice.reducer;
