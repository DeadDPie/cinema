import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Afisha.module.css";

export const Afisha = () => {
  const [movie, setMovie] = useState();
  let m;
  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "https://shift-backend.onrender.com/cinema/today",
      };

      try {
        const response = await axios.request(options);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  if (movie) {
    console.log(movie.films[0].name);
    const names = movie.films.map((x) => x.name);
    console.log(names);
  }

  /*{movie && (
        <>
          <p>{movie}</p>
        </>
      )}*/
  return (
    <>
      <p className={styles.p}>afisha</p>
    </>
  );
};
