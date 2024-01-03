import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@header/Header";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import { Schedule } from "../Schedule/Schedule";
import { BuyingSeats } from "../BuyingSeats/BuyingSeats";
export const FilmPage = () => {
  const [movie, setMovie] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: `https://shift-backend.onrender.com/cinema/film/${filmId}`,
      };

      try {
        const response = await axios.request(options);
        //console.log(response.data.film);
        setMovie(response.data.film);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return (
    <>
      <Header />
      <div>{movie && <FilmInfo film={movie}></FilmInfo>}</div>
      <Schedule></Schedule>
      <BuyingSeats></BuyingSeats>
    </>
  );
};
