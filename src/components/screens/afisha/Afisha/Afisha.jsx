import styles from "./Afisha.module.css";
import { Header } from "../Header/Header";
import { CardsList } from "../CardsList/CardsList";

export const Afisha = () => {
  return (
    <>
      <Header />
      <h1 className={styles.h1}>Afisha</h1>
      <p className={styles.p}>today at the cinema </p>
      <CardsList></CardsList>
    </>
  );
};
