import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import cl from "./Header.module.scss";
export const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");

  const isUserAuthorised = token && token.length > 0 ? true : false;

  const [search, setSearch] = useState("");
  const searchFilm = (e) => {
    console.log(search);
  };

  return (
    <>
      <header className={cl.header}>
        <Link to="/" onClick={() => navigate(`/`)} className={cl.logo}>
          RETROcinema
        </Link>
        <div className={cl.box}>
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
            <button onClick={() => navigate("/auth")} className={cl.btn}>
              Login
            </button>
          </nav>
        )}
        {isUserAuthorised && (
          <nav>
            <button
              onClick={() => Cookies.remove("userToken")}
              className={cl.btn}
            >
              Logout
            </button>
            <button
              onClick={() => navigate("/account", { state: { token: token } })}
              className={cl.btn}
            >
              Profile
            </button>
          </nav>
        )}
      </header>
    </>
  );
};
