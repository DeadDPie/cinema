import { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState("");
  const searchFilm = (e) => {
    console.log(search);
  };
  const nav = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <a href="#" onClick={() => nav(`/`)} className={styles.logo}>
          SHIFTcinema
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
          <button onClick={() => nav("/auth")} className={styles.btn}>
            Login
          </button>
        </nav>
      </header>
    </>
  );
};
