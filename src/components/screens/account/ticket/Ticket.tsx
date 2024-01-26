import React from "react";

import { useCanceledTicket } from "../../../../hooks/useCanceledTicket.tsx";
import { useMovie } from "../../../../hooks/useMovie";

import cl from "./Ticket.module.scss";

interface TicketProps {
  token: string;
  ticket: {
    _id: string;
    tickets: {
      seance: {
        date: string;
        time: string;
      };
      filmId: number;
      row: number;
      column: number;
    }[];
    status: string;
    orderNumber: string;
  };
}

export const Ticket: React.FC<TicketProps> = ({ token, ticket }) => {
  //console.log(ticket);
  const ticketInfo = ticket.tickets[0];
  const seance = ticketInfo.seance;
  const filmId = ticketInfo.filmId;

  const movie = useMovie(filmId);
  const useCanceledTickets = useCanceledTicket(token, ticket._id);

  return (
    <div>
      <div className={cl.moduleTicket}>
        <div className={cl.tiketTop}>
          {seance && <p className={cl.date}>{seance.date}</p>}
          {seance && <p className={cl.date}>{seance.time}</p>}
        </div>

        {movie && (
          <>
            <p className={cl.filmName}>{movie["name"]}</p>
            <p className={cl.place}>
              row {ticketInfo.row} place {ticketInfo.column}
            </p>
          </>
        )}

        <div className={cl.about}>
          <div className={cl.status}>{ticket.status}</div>
          <p className={cl.code}>ticket code {ticket.orderNumber}</p>
        </div>
      </div>
      {ticket.status !== "CANCELED" && (
        <button onClick={useCanceledTickets} className={cl.button}>
          Cancel
        </button>
      )}
    </div>
  );
};
