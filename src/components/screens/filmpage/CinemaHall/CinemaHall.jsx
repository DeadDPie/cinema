import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  choseFilm,
  chosePlaces,
  setFilmId,
  setSuccessful,
} from "../../../../store/paymentDetails/paymentDetails.slice.ts";
import Cookies from "js-cookie";
import { setPhone } from "../../../../store/user/user.slice";

import cl from "./CinemaHall.module.scss";

export const CinemaHall = ({ user, name, cinema, movieId, callbackModal }) => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");
  const dispatch = useDispatch();

  const [place, setPlace] = useState({ row: "", placeNumber: "", price: "" });

  const isUserAuthorised = token && token.length > 0 ? true : false;

  const buy = (name, place) => {
    dispatch(choseFilm(name));
    dispatch(chosePlaces(place));
    dispatch(setFilmId(movieId));
    dispatch(setSuccessful(false));

    callbackModal(true);
  };
  const buyWithAuth = () => {
    dispatch(setFilmId(movieId));
    dispatch(setSuccessful(false));
    dispatch(setPhone(user.phone));
  };
  const userData = useSelector((state) => state.user);
  const chhec = useSelector((state) => state.payment);
  const goToPayment = (name, place) => {
    dispatch(choseFilm(name));
    dispatch(chosePlaces(place));
    console.log(userData);
    console.log(chhec);

    navigate("/payment", { state: { user: userData } });
  };
  return (
    <div>
      <div className={cl.schedule}>
        <div className={cl.cinema}>
          {cinema &&
            cinema.places.map((row, indexRow) => (
              <div>
                {row.map((place, indexPlace) => (
                  <button
                    onClick={() => {
                      setPlace({
                        ...place,
                        row: indexRow + 1,
                        price: place.price,
                        placeNumber: indexPlace + 1,
                      });
                      buyWithAuth(name, place);
                    }}
                    className={`${cl.place} ${
                      place.type === "ECONOM" ? cl.econom : cl.comfort
                    } ${place.price == 0 ? cl.blocked : ""}`}
                  ></button>
                ))}
              </div>
            ))}
        </div>
        <div className={cl.ticket}>
          <div className={cl.info}>
            <div>
              <p className={cl.h1}>Hallname: </p>
              {cinema && <p>{cinema.name}</p>}
            </div>
            <p className={cl.h1}>Film:</p>
            <p>{name}</p>
            <p className={cl.h1}>Places</p>
            <p>
              Row: {place.row} Seat number: {place.placeNumber}
            </p>
          </div>
          <div className={cl.cost}>
            <p>Full price</p>
            <p>{place.price}</p>
            {isUserAuthorised && (
              <button
                className={cl.btn}
                onClick={() => goToPayment(name, place)}
              >
                Buy <i className="bx bx-credit-card-front"></i>
              </button>
            )}
            {!isUserAuthorised && (
              <button className={cl.btn} onClick={() => buy(name, place)}>
                Buy <i className="bx bx-credit-card-front"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
