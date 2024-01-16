import React, { useEffect, useState } from "react";
import cl from "./Ticket.module.scss";
import axios from "axios";
export const Ticket = ({ ticket }) => {
  const [movie, setMovie] = useState();
  console.log(ticket);
  const ticketInfo = ticket.tickets[0];
  const seance = ticketInfo.seance;
  const filmId = ticketInfo.filmId;
  {
    filmId &&
      useEffect(() => {
        const func = async () => {
          const options = {
            method: "GET",
            url: `https://shift-backend.onrender.com/cinema/film/${filmId}`,
          };

          try {
            const response = await axios.request(options);
            setMovie(response.data.film.name);
          } catch (error) {
            console.error(error);
          }
        };
        func();
      }, []);
  }

  return (
    <div className={cl.ticket}>
      <div className={cl.tiketTop}>
        {seance && <p className={cl.date}>{seance.date}</p>}
        {seance && <p className={cl.date}>{seance.time}</p>}
      </div>

      {movie && <p className={cl.filmName}>{movie}</p>}
      {movie && (
        <p className={cl.place}>
          row {ticketInfo.row} place {ticketInfo.column}
        </p>
      )}

      <div className={cl.about}>
        <div className={cl.status}>{ticket.status}</div>
        <p className={cl.code}>ticket code {ticket.orderNumber}</p>
      </div>
    </div>
  );
};
