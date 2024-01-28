import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  filmId: string;
  film: string;
  date: string;
  time: string;
  places: {
    row: string;
    seat: string;
  };
  isSuccessful: boolean;
  name: string;
}

const initialState: PaymentState = {
  filmId: "",
  film: "",
  date: "",
  time: "",
  places: { row: "", seat: "" },
  isSuccessful: false,
  name: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setSuccessful: (state, action: PayloadAction<boolean>) => {
      state.isSuccessful = action.payload;
    },
    setFilmId: (state, action: PayloadAction<string>) => {
      state.filmId = action.payload;
    },
    choseFilm: (state, action: PayloadAction<string>) => {
      state.film = action.payload;
    },
    choseDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    choseTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    choseName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    chosePlaces: (
      state,
      action: PayloadAction<{ row: string; placeNumber: string }>
    ) => {
      state.places.row = action.payload.row;
      state.places.seat = action.payload.placeNumber;
    },
  },
});

export const {
  choseFilm,
  choseDate,
  choseTime,
  choseName,
  chosePlaces,
  setFilmId,
  setSuccessful,
} = paymentSlice.actions;

export default paymentSlice.reducer;
