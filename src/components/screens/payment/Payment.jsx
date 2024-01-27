import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSuccessful } from "./../../../store/paymentDetails/paymentDetails.slice";
import { useLocation } from "react-router-dom";

import cl from "./Payment.module.scss";
export const Payment = () => {
  const location = useLocation();
  const user = location.state.user;

  console.log(user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState();
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
  //{name: 'dfgh', surname: 'dfg', partonymic: 'cvb', phone: 'fghj'}
  const buyTicket = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/cinema/payment",
      data: {
        filmId: `${movieId}`,
        person: {
          firstname: `${user.firstname}`,
          lastname: `${user.lastname}`,
          middlename: `${user.middlename}`,
          phone: `${user.phone}`,
        },
        debitCard: {
          pan: `${debitCard.pan}`,
          expireDate: `${debitCard.expireDate}`,
          cvv: `${debitCard.cvv}`,
        },
        seance: {
          date: `${date}`,
          time: `${time}`,
        },
        tickets: [
          {
            row: parseInt(places.row),
            column: parseInt(places.seat),
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
      data.success &&
        dispatch(setSuccessful(true)) &&
        navigate(`/film/${movieId}`);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(date);
  {
    //так делать вообще правильно или это костыль из-за промиса
    data &&
      data.success &&
      dispatch(setSuccessful(true)) &&
      navigate(`/film/${movieId}`);
  }
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
