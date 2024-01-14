import React from "react";
import cl from "./Auth.module.scss";

export const Auth = () => {
  return (
    <div>
      <div className={cl.auth}>
        <h1>Authentication</h1>
        <div>
          <div>
            <p>Phone number</p>
            <input type="text" />
          </div>

          <div>
            <p>Code from SMS</p>
            <input type="text" />
          </div>
        </div>
        <div>
          <button className={cl.codeBtn}>Request code</button>
          <button className={cl.btn}>Continue</button>
        </div>
      </div>
    </div>
  );
};
