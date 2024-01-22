import React from "react";
import cl from "./ModalDetailsPayment.module.scss";
export const ModalDetailsPayment = ({ children, visible, setVisisble }) => {
  return (
    <div
      className={`${cl.Modal} ${visible && cl.active}`}
      onClick={() => setVisisble(false)}
    >
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
