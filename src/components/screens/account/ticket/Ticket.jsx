import cl from "./Ticket.module.scss";
import { useCanceledTicket } from "../../../../hooks/useTickets";
import { useMovie } from "../../../../hooks/useMovie";

export const Ticket = ({ token, ticket }) => {
  //console.log(ticket);
  const ticketInfo = ticket.tickets[0];
  const seance = ticketInfo.seance;
  const filmId = ticketInfo.filmId;

  const movie = useMovie(filmId);

  const useCanceledTickets = useCanceledTicket(token, ticket._id);
  return (
    <div>
      <div className={cl.ticket}>
        <div className={cl.tiketTop}>
          {seance && <p className={cl.date}>{seance.date}</p>}
          {seance && <p className={cl.date}>{seance.time}</p>}
        </div>

        {movie && (
          <>
            <p className={cl.filmName}>{movie.name}</p>
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
        <button
          onClick={useCanceledTickets}
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
