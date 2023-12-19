import { Router } from "./Router.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
