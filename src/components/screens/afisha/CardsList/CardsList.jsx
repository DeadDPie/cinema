import { Card } from "../Card/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const CardsList = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "https://shift-backend.onrender.com/cinema/today",
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.films);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  //console.log(movies);
  /*
  if (movie) {
    console.log(movie.films[0].name);
    const names = movie.films.map((x) => x.name);
    console.log(names);
  }*/

  /*{movie && (
        <>
          <p>{movie}</p>
        </>
      )}*/
  return <>{movies && <Card data={movies}></Card>}</>;
};
