import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { usePayment } from "../../../hooks/usePayment";

import cl from "./Payment.module.scss";

export const Payment = () => {
  const location = useLocation();
  const user = location.state.user;

  console.log(user);

  const [debitCard, setDebitCard] = useState({
    pan: "",
    expireDate: "",
    cvv: "",
  });

  const movieId = useSelector((state) => state.payment.filmId);
  const date = useSelector((state) => state.payment.date);
  const time = useSelector((state) => state.payment.time);
  const places = useSelector((state) => state.payment.places);
  console.log(movieId);
  console.log(date);
  console.log(places);
  /*
person: {
          firstname: "firstname",
          lastname: "lastname",
          middlename: "middlename",
          phone: "89990009999",
        },
        debitCard: {
          pan: "1111 1111",
          expireDate: "11/11",
          cvv: "111",
        }, */

  const buyTicket = usePayment(movieId, user, debitCard, date, time, places);

  return (
    <div className={cl.payment}>
      <h2>Enter your payment details</h2>
      <div className={cl.card}>
        <div className={cl.SHIFTCARD}>SHIFTCARD</div>
        <div>
          <div className={cl.number}>
            <p>Number*</p>
            <input
              type="text"
              placeholder="0000 0000"
              value={debitCard.pan || ""}
              minlength="8"
              maxlength="9"
              onChange={(e) =>
                setDebitCard({ ...debitCard, pan: e.target.value })
              }
            />
          </div>
          <div className={cl.other}>
            <div className={cl.date}>
              <p>Date</p>
              <input
                type="text"
                placeholder="00/00"
                value={debitCard.expireDate || ""}
                onChange={(e) =>
                  setDebitCard({ ...debitCard, expireDate: e.target.value })
                }
              />
            </div>
            <div className={cl.cvv}>
              <p>CVV*</p>
              <input
                type="text"
                placeholder="000"
                minlength="3"
                maxlength="4"
                value={debitCard.cvv || ""}
                onChange={(e) =>
                  setDebitCard({ ...debitCard, cvv: e.target.value })
                }
              />
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
