import { createSlice } from '@reduxjs/toolkit';

export type InitialStateProps = {
  mixedArray: number[];
  clickBlocked: boolean;
  openedCard: number[];
  matched: number[];
  isNewGame: boolean;
  isEndGame: boolean;
  gameScore: number;
  userName: string;
  scoresVisible: boolean;
};

const initialState: InitialStateProps = {
  mixedArray: [],
  clickBlocked: false,
  openedCard: [],
  matched: [],
  isNewGame: false,
  isEndGame: false,
  gameScore: 0,
  userName: '',
  scoresVisible: false
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
    showScoreBoard: (state, action) => {
      state.scoresVisible = action.payload;
    },
    startNewGame: (state) => {
      state.isNewGame = true;
    },
    setIsEndGame: (state) => {
      state.isEndGame = true;
    },
    setGameScore: (state) => {
      state.gameScore = state.gameScore += 1;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    resetGame: (state) => {
      state.mixedArray = [];
      state.clickBlocked = false;
      state.openedCard = [];
      state.matched = [];
      state.isNewGame = false;
      state.gameScore = 0;
      state.userName = '';
      state.scoresVisible = false;
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
  setIsEndGame,
  setGameScore,
  setUserName,
  showScoreBoard
} = counterSlice.actions;
export default counterSlice.reducer;
