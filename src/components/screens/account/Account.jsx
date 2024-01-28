import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Ticket } from "./ticket/Ticket";
import { Link } from "react-router-dom";
import { useOrders } from "../../../hooks/useOrders";

import cl from "./Account.module.scss";

export const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state.token;

  Cookies.set("userToken", `${token}`);

  const tickets = useOrders(token);

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
