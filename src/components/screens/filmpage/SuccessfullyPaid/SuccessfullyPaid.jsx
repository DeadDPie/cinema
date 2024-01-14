import React from "react";
import cl from "./SuccessfullyPaid.module.scss";
import { useSelector } from "react-redux";
export const SuccessfullyPaid = () => {
  const filmName = useSelector((state) => state.payment.film);
  const Date = useSelector((state) => state.payment.date);
  const time = useSelector((state) => state.payment.time);
  const places = useSelector((state) => state.payment.places);

  return (
    <div>
      <div className={cl.payment}>
        <h2>The payment was successful</h2>
        <i className="bx bx-check-circle"></i>
        <p>Ticket code</p>
        <p className={cl.code}>777777</p>
      </div>
      <div className={cl.ticketInfo}>
        <p className={cl.title}>Film</p>
        <p>{filmName}</p>
        <p className={cl.title}>Date and time</p>
        <p>
          {Date} {time}
        </p>
        <p className={cl.title}>Places</p>
        <p>Row: {places.row}</p>

        <p>Seat: {places.seat}</p>
      </div>
      <div className={cl.additionalInfo}>
        вся информация была продублирована в SMS
      </div>
    </div>
  );
};
