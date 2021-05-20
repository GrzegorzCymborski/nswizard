import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  mixedArray: number[];
  clickBlocked: boolean;
  openedCard: number[];
  matched: number[];
  isNewGame: boolean;
  isEndGame: boolean;
};

const initialState: InitialStateProps = {
  mixedArray: [],
  clickBlocked: false,
  openedCard: [],
  matched: [],
  isNewGame: false,
  isEndGame: false
};

export const counterSlice = createSlice({
  name: 'memo game data',
  initialState,
  reducers: {
    setCardsArray: (state, action) => {
      state.mixedArray = action.payload;
    },
    setClickBlocked: (state, action) => {
      state.clickBlocked = action.payload;
    },
    setOpenedCard: (state, action) => {
      state.openedCard = [...state.openedCard, action.payload];
    },
    clearOpenCard: (state) => {
      state.openedCard = [];
    },
    setMatched: (state, action) => {
      state.matched = action.payload;
    },
    startNewGame: (state) => {
      state.isNewGame = true;
    },
    setIsEndGame: (state) => {
      state.isEndGame = true;
    },
    resetGame: (state) => {
      (state.mixedArray = []),
        (state.clickBlocked = false),
        (state.openedCard = []),
        (state.matched = []),
        (state.isNewGame = false);
      state.isEndGame = false;
    }
  }
});

export const {
  setCardsArray,
  setClickBlocked,
  setOpenedCard,
  clearOpenCard,
  setMatched,
  startNewGame,
  resetGame,
  setIsEndGame
} = counterSlice.actions;
export default counterSlice.reducer;
