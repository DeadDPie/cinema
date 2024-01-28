import { useEffect, useState } from "react";
import axios from "axios";

export const useAllMovies = () => {
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

  return movies;
};
