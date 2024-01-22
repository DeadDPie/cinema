import cl from "./Afisha.module.scss";
import { Header } from "../Header/Header";
import { CardsList } from "../CardsList/CardsList";

export const Afisha = () => {
  return (
    <>
      <Header />
      <h1 className={cl.h1}>Afisha</h1>
      <p className={cl.p}>today at the cinema </p>
      <CardsList></CardsList>
    </>
  );
};
