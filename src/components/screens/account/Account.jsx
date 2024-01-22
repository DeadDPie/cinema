import React, { useEffect, useState } from "react";
import cl from "./Account.module.scss";
import { Ticket } from "./ticket/Ticket";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
export const Account = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = location.state.token;

  Cookies.set("userToken", `${token}`);

  const [tickets, setTickets] = useState();
  useEffect(() => {
    const func = async () => {
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijg5OTkwMDA5OTk5IiwiaWF0IjoxNzA1Mzg4ODA1fQ.u8JXn0ZZLCT3yLr8nOJ7r7ZJlCtPVPLIs6ErgXwdI8g";
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

  const unAuthorise = () => {
    Cookies.remove("userToken");
    navigate("/auth");
  };
  return (
    <div>
      <header className={cl.header}>
        <Link to="/" className={cl.logo}>
          RETROcinema
        </Link>

        <nav>
          <button onClick={() => unAuthorise()} className={cl.btnLogOut}>
            Log out
          </button>
        </nav>
      </header>

      <div className={cl.Account}>
        <h1>Account</h1>
        <p>Your tickets</p>
        <div className={cl.ticketsList}>
          {tickets &&
            tickets.map((ticket, index) => (
              <Ticket token={token} ticket={ticket} />
            ))}
        </div>
      </div>
    </div>
  );
};
