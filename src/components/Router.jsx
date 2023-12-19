import { Route, Routes } from "react-router-dom";
import { Afisha } from "./screens/afisha/Afisha";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Afisha />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
