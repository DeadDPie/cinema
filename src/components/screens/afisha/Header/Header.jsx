import { useState } from "react";
import cl from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import setAuthorised from "../../../../store/user/user.slice";
import Cookies from "js-cookie";

export const Header = () => {
  const token = Cookies.get("userToken");

  const isUserAuthorised = token && token.length > 0 ? true : false;

  const [search, setSearch] = useState("");
  const searchFilm = (e) => {
    console.log(search);
  };
  const navigate = useNavigate();
  console.log(isUserAuthorised);
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
