import { Route, Routes } from "react-router-dom";
import { Afisha } from "./screens/afisha/Afisha/Afisha";
import { FilmPage } from "./screens/filmpage/FilmPage/FilmPage";
import { Payment } from "./screens/payment/Payment";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Afisha />} />
      <Route path="/film/:filmId" element={<FilmPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
