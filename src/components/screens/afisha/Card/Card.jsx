import styles from "./Card.module.css";

export const Card = (props) => {
  console.log(props);
  /*
  const film = {
    id: 0,
    actors: [{}, {}],
    ageRating: "R",
    description:
      "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
    directors: [{}, {}],
    genres: ["драма", "фэнтези", "криминал"],
    id: "1",
    img: "/static/images/cinema/film_1.webp",
    name: "Зеленая миля",
    originalName: "The Green Mile",
    releaseDate: "6 декабря 1999",
    runtime: 189,
    userRatings: { kinopoisk: "9.1" },
  };*/
  const film = props.data[0];
  return (
    <>
      <div>
        <div className={styles.item}>
          <p>{film.genres.join(", ")}</p>
          <p>{film.releaseDate}</p>
          <img src={film.img} alt="photo of movie" />
          <h2>{film.originalName}</h2>
          <h1>{film.name}</h1>
          <i class="bx bxs-star"></i>
          <p>{film.userRatings.kinopoisk}</p>
          <button>read more</button>
        </div>
      </div>
    </>
  );
};
