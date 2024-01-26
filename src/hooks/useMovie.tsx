import { useEffect, useState } from "react";
import axios from "axios";

export const useMovie = (filmId: number) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        url: `https://shift-backend.onrender.com/cinema/film/${filmId}`,
      };

      try {
        const response = await axios.request(options);
        setMovie(response.data.film);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [filmId]);

  return movie;
};
