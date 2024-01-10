import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./FilmInfo.module.css";

export const FilmInfo = (props) => {
  const { film } = props;

  //console.log(film);
  /**/
  return (
    <>
      <div className={styles.info}>
        <img
          className={styles.image}
          src={`https://shift-backend.onrender.com${film.img}`}
          alt="photo of movie"
        />
        <div className={styles.item}>
          <p className={styles.h1}>{film.name}</p>
          <p className={styles.h2}>{film.originalName}</p>

          <div className={styles.about}>
            <p>{film.genres.join(", ")}</p>
            <p>{film.releaseDate}</p>
          </div>

          <div>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>

          <p className={styles.rating}>
            Kinopoisk - {film.userRatings.kinopoisk}
          </p>
          <p>{film.description}</p>
        </div>
      </div>
    </>
  );
};
