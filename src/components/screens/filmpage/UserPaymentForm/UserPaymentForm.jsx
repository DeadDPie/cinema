import React from "react";
import cl from "./UserPaymentForm.module.scss";
import { useNavigate } from "react-router-dom";
export const UserPaymentForm = () => {
  const nav = useNavigate();
  return (
    <div className={cl.form}>
      <div className={cl.h}>Enter your details</div>
      <form action="">
        <div>
          <p>Name*</p>
          <input type="text" />
        </div>
        <div>
          <p>Surname*</p>
          <input type="text" />
        </div>
        <div>
          <p>Partonymic</p>
          <input type="text" />
        </div>
        <div>
          <p>Phone number*</p>
          <input type="text" />
        </div>
        <div className={cl.btn}>
          <button onClick={() => nav("/payment")}>Continue</button>
        </div>
      </form>
    </div>
  );
};
