import React from "react";
import cl from "./Payment.module.scss";
export const Payment = () => {
  return (
    <div className={cl.payment}>
      <h2>Enter your payment details</h2>
      <div className={cl.card}>
        <div className={cl.SHIFTCARD}>SHIFTCARD</div>
        <div>
          <div className={cl.number}>
            <p>Number*</p>
            <input type="text" placeholder="0000 0000" />
          </div>
          <div className={cl.other}>
            <div className={cl.date}>
              <p>Date</p>
              <input type="text" placeholder="00/00" />
            </div>
            <div className={cl.cvv}>
              <p>CVV*</p>
              <input type="text" placeholder="0000" />
            </div>
          </div>
        </div>
      </div>

      <button className={cl.btn}>Pay</button>
    </div>
  );
};
