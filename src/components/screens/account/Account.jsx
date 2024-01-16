import React, { useEffect, useState } from "react";
import cl from "./Account.module.scss";
import { Ticket } from "./ticket/Ticket";
import axios from "axios";
export const Account = () => {
  const [tickets, setTickets] = useState();
  useEffect(() => {
    const func = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijg5OTkwMDA5OTk5IiwiaWF0IjoxNzA1Mzg4ODA1fQ.u8JXn0ZZLCT3yLr8nOJ7r7ZJlCtPVPLIs6ErgXwdI8g";
      const options = {
        method: "GET",
        url: "https://shift-backend.onrender.com/cinema/orders",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setTickets(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  return (
    <div>
      <div className={cl.Account}>
        <h1>Account</h1>
        <p>Your tickets</p>
        <div className={cl.ticketsList}>
          {tickets &&
            tickets.map((ticket, index) => <Ticket ticket={ticket} />)}
        </div>
      </div>
    </div>
  );
};
