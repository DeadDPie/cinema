import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../Card/Card";

import cl from "./CardsList.module.scss";

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
  return (
    <>
      <div className={cl.all}>
        {movies &&
          movies.map((film) => <Card film={film} key={film.id}></Card>)}
      </div>
    </>
  );
};
