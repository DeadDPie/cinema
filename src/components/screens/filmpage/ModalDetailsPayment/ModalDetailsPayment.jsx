import React from "react";
import cl from "./ModalDetailsPayment.module.css";
export const ModalDetailsPayment = ({ children, visible, setVisisble }) => {
  const rootClassses = [cl.myModal];
  if (visible) {
    rootClassses.push(cl.active);
  }
  return (
    <div
      className={`${cl.myModal} ${visible && cl.active}`}
      onClick={() => setVisisble(false)}
    >
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
