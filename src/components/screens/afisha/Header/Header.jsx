import { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import setAuthorised from "../../../../store/user/user.slice";

export const Header = () => {
  const isUserAuthorised = useSelector((state) => state.user.isAuthorised);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchFilm = (e) => {
    console.log(search);
  };
  const nav = useNavigate();
  console.log(isUserAuthorised);
  return (
    <>
      <header className={styles.header}>
        <a href="/" onClick={() => nav(`/`)} className={styles.logo}>
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
        {!isUserAuthorised && (
          <nav>
            <button onClick={() => nav("/auth")} className={styles.btn}>
              Login
            </button>
          </nav>
        )}
        {isUserAuthorised && (
          <nav>
            <button
              //onClick={() => dispatch(setAuthorised(false))}
              className={styles.btn}
            >
              Logout
            </button>
          </nav>
        )}
      </header>
    </>
  );
};
