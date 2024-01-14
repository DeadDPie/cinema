import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@header/Header";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import { Schedule } from "../Schedule/Schedule";
import cl from "./FilmPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { ModalDetailsPayment } from "../ModalDetailsPayment/ModalDetailsPayment";
import { setSuccessful } from "./../../../../store/paymentDetails/paymentDetails.slice";
import { SuccessfullyPaid } from "../SuccessfullyPaid/SuccessfullyPaid";
export const FilmPage = () => {
  const isSuccessful = useSelector((state) => state.payment.isSuccessful);
  const dispatch = useDispatch();

  const [movie, setMovie] = useState();
  const { filmId } = useParams();
  const [successfullyPaid, setsuccessfullyPaid] = useState(false);

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
  console.log(
    "isSuccessful " + isSuccessful,
    "successfullyPaid " + successfullyPaid + ">"
  );
  const handleSuccessfulPayment = () => {
    //костыль, чтобы скрывать модальное окно с успешной оплатой
    //по не знаю как реализовать нормально
    setsuccessfullyPaid(true);
    dispatch(setSuccessful(false));
  };
  return (
    <>
      <Header />
      <div className={cl.all}>
        <div>{movie && <FilmInfo film={movie} />}</div>
        {movie && <Schedule name={movie.name} movieId={movie.id}></Schedule>}
        {isSuccessful && !successfullyPaid && (
          <ModalDetailsPayment
            visible={!successfullyPaid}
            setVisisble={handleSuccessfulPayment}
          >
            <SuccessfullyPaid />
          </ModalDetailsPayment>
        )}
      </div>
    </>
  );
};
