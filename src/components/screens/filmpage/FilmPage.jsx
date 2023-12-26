import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
export const FilmPage = () => {
  const location = useLocation();
  const { filmId } = useParams();

  console.log(filmId);
  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: `https://shift-backend.onrender.com/cinema/film/${filmId}`,
      };

      try {
        const response = await axios.request(options);
        //setMovies(response.data.films);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  return (
    <>
      <p>Filmpage</p>
    </>
  );
};
