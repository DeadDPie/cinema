import React, { useState } from "react";
import cl from "./UserPaymentForm.module.scss";
import { useNavigate } from "react-router-dom";
export const UserPaymentForm = () => {
  const nav = useNavigate();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    partonymic: "",
    phone: "",
  });
  return (
    <div className={cl.form}>
      <div className={cl.h}>Enter your details</div>
      <form action="">
        <div>
          <p>Name*</p>
          <input
            required
            type="text"
            value={user.name || ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <p>Surname*</p>
          <input
            required
            type="text"
            value={user.surname || ""}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </div>
        <div>
          <p>Partonymic</p>
          <input
            type="text"
            value={user.partonymic || ""}
            onChange={(e) => setUser({ ...user, partonymic: e.target.value })}
          />
        </div>
        <div>
          <p>Phone number*</p>
          <input
            required
            type="text"
            value={user.phone || ""}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div className={cl.btn}>
          <button onClick={() => nav("/payment", { state: { user: user } })}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
