import React, { useState } from "react";

import { useAuth, useRequestCode } from "../../../hooks/useAuth";

import cl from "./Auth.module.scss";

export const Auth = () => {
  const [code, setCode] = useState();
  const [phone, setPhone] = useState();

  const handleButtonClick = useAuth(phone, code);
  const handleRequestCode = useRequestCode(phone);

  return (
    <div>
      <div className={cl.auth}>
        <h1>Authentication</h1>
        <div>
          <div>
            <p>Phone number</p>
            <input
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <p>Code from SMS</p>
            <input
              value={code || ""}
              onChange={(e) => setCode(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div>
          <button className={cl.codeBtn} onClick={handleRequestCode}>
            Request code
          </button>
          <button className={cl.btn} onClick={handleButtonClick}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
