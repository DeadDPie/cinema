import React, { useEffect, useState } from "react";
import cl from "./Ticket.module.scss";
import axios from "axios";
export const Ticket = ({ token, ticket }) => {
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

  const handleButtonClick = async () => {
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijg5OTkwMDA5OTk5IiwiaWF0IjoxNzA1Mzg4ODA1fQ.u8JXn0ZZLCT3yLr8nOJ7r7ZJlCtPVPLIs6ErgXwdI8g";
    const options = {
      method: "PUT",
      url: "https://shift-backend.onrender.com/cinema/orders/cancel",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        orderId: `${ticket._id}`,
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
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
      {ticket.status !== "CANCELED" && (
        <button
          onClick={handleButtonClick}
          style={{
            borderRadius: "20px",
            border: "2px",
            color: "white",
            backgroundColor: "salmon",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
};
