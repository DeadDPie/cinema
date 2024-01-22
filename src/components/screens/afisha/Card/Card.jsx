import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = (props) => {
  const { film } = props;
  //console.log(film);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.item}>
        <div className={styles.about}>
          <p>{film.genres[0]}</p>
          <p>{film.releaseDate}</p>
        </div>

        <img
          className={styles.image}
          src={`https://shift-backend.onrender.com${film.img}`}
          alt="photo of movie"
        />
        <div className={styles.ageRating}>{film.ageRating}</div>
        <p className={styles.h1}>{film.name}</p>
        <p className={styles.h2}>{film.originalName}</p>
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
        <button type="submit" onClick={() => navigate(`/film/${film.id}`)}>
          Read more
        </button>
      </div>
    </>
  );
};
