import { useState } from "react";
import styles from "./Header.module.css";
export const Header = () => {
  const [search, setSearch] = useState("");
  const searchFilm = (e) => {
    console.log(search);
  };
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Logo
        </a>
        <div className={styles.box}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <a href="#">
            <i className="bx bx-search" onClick={searchFilm}></i>
          </a>
        </div>
        <nav>
          <a href="#" className={styles.a}>
            Home
          </a>
          <a href="#" className={styles.a}>
            About
          </a>
          <button className={styles.btn}>Login</button>
        </nav>
      </header>
    </>
  );
};
