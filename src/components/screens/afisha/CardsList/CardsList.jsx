import React from "react";
import { useAllMovies } from "../../../../hooks/useAllMovies";
import { Card } from "../Card/Card";

import cl from "./CardsList.module.scss";

export const CardsList = () => {
  const movies = useAllMovies();

  return (
    <>
      <div className={cl.all}>
        {movies &&
          movies.map((film) => <Card film={film} key={film.id}></Card>)}
      </div>
    </>
  );
};
