import { useNavigate } from "react-router-dom";
import cl from "./Card.module.scss";

export const Card = (props) => {
  const { film } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className={cl.item}>
        <div className={cl.about}>
          <p>{film.genres[0]}</p>
          <p>{film.releaseDate}</p>
        </div>

        <img
          className={cl.image}
          src={`https://shift-backend.onrender.com${film.img}`}
          alt="photo of movie"
        />
        <div className={cl.ageRating}>{film.ageRating}</div>
        <p className={cl.h1}>{film.name}</p>
        <p className={cl.h2}>{film.originalName}</p>
        <div>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
        </div>

        <p className={cl.rating}>Kinopoisk - {film.userRatings.kinopoisk}</p>
        <button type="submit" onClick={() => navigate(`/film/${film.id}`)}>
          Read more
        </button>
      </div>
    </>
  );
};
