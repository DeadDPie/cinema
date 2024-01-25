import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import cl from "./Auth.module.scss";

export const Auth = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const [phone, setPhone] = useState();
  const [data, setData] = useState();

  //89990009999
  const handleButtonClick = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/users/signin",
      data: { phone: `${phone}`, code: parseInt(code) },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);

      response.data.success &&
        navigate("/account", { state: { token: response.data.token } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequestCode = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/auth/otp",
      data: { phone: `${phone}` },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
