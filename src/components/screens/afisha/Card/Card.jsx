import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = (props) => {
  const { film } = props;
  console.log(film);
  const nav = useNavigate();
  return (
    <>
      <div className={styles.item}>
        <div className={styles.about}>
          <p>{film.genres.join(", ")}</p>
          <p>{film.releaseDate}</p>
        </div>

        <img
          className={styles.image}
          src={`https://shift-backend.onrender.com${film.img}`}
          alt="photo of movie"
        />
        <p>{film.ageRating}</p>
        <h2>{film.name}</h2>
        <h3>{film.originalName}</h3>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <p className={styles.rating}>
          Kinopoisk - {film.userRatings.kinopoisk}
        </p>
        <button type="submit" onClick={() => nav(`/film/${film.id}`)}>
          Read more
        </button>
      </div>
    </>
  );
};
