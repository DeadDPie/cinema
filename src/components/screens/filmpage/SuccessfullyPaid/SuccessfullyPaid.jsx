import React from "react";
import { useSelector } from "react-redux";

import cl from "./SuccessfullyPaid.module.scss";
export const SuccessfullyPaid = () => {
  const { film, date, time, places } = useSelector((state) => state.payment);

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
        <p>{film}</p>
        <p className={cl.title}>Date and time</p>
        <p>
          {date} {time}
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
