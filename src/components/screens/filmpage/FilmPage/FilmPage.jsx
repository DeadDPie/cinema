import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "@header/Header";

import { FilmInfo } from "../FilmInfo/FilmInfo";
import { Schedule } from "../Schedule/Schedule";
import { ModalDetailsPayment } from "../ModalDetailsPayment/ModalDetailsPayment";
import { setSuccessful } from "./../../../../store/paymentDetails/paymentDetails.slice";
import { SuccessfullyPaid } from "../SuccessfullyPaid/SuccessfullyPaid";

import cl from "./FilmPage.module.scss";
import { useMovie } from "../../../../hooks/useMovie";

export const FilmPage = () => {
  const isSuccessful = useSelector((state) => state.payment.isSuccessful);
  const dispatch = useDispatch();

  const { filmId } = useParams();
  const [successfullyPaid, setsuccessfullyPaid] = useState(false);

  const movie = useMovie(filmId);

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
        {movie && (
          <>
            <div>
              <FilmInfo film={movie} />
            </div>
            <Schedule name={movie.name} movieId={movie.id} />
          </>
        )}

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
