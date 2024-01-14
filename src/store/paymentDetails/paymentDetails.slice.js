import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    filmId: "",
    film: "",
    date: "",
    time: "",
    places: { row: "", seat: "" },
    isSuccessful: false,

    name: "",
  },
  reducers: {
    setSuccessful: (state, { payload: successfullyPaid }) => {
      state.isSuccessful = successfullyPaid;
    },
    setFilmId: (state, { payload: movieId }) => {
      state.filmId = movieId;
    },
    choseFilm: (state, { payload: film }) => {
      state.film = film;
    },
    choseDate: (state, { payload: date }) => {
      state.date = date;
    },
    choseTime: (state, { payload: time }) => {
      state.time = time;
    },
    choseName: (state, { payload: name }) => {
      state.name = name;
    },
    chosePlaces: (state, { payload: places }) => {
      state.places.row = places.row;
      state.places.seat = places.placeNumber;
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
