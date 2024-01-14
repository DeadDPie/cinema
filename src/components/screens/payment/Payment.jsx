import React from "react";
import cl from "./Payment.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSuccessful } from "./../../../store/paymentDetails/paymentDetails.slice";

export const Payment = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const movieId = useSelector((state) => state.payment.filmId);

  const buyTicket = () => {
    dispatch(setSuccessful(true));
    nav(`/film/${movieId}`);
  };
  return (
    <div className={cl.payment}>
      <h2>Enter your payment details</h2>
      <div className={cl.card}>
        <div className={cl.SHIFTCARD}>SHIFTCARD</div>
        <div>
          <div className={cl.number}>
            <p>Number*</p>
            <input type="text" placeholder="0000 0000" />
          </div>
          <div className={cl.other}>
            <div className={cl.date}>
              <p>Date</p>
              <input type="text" placeholder="00/00" />
            </div>
            <div className={cl.cvv}>
              <p>CVV*</p>
              <input type="text" placeholder="0000" />
            </div>
          </div>
        </div>
      </div>

      <button className={cl.btn} onClick={() => buyTicket()}>
        Pay
      </button>
    </div>
  );
};
