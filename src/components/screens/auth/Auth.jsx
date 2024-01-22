import React, { useState } from "react";
import cl from "./Auth.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

      data.success && navigate("/account", { state: { token: data.token } });
    } catch (error) {
      console.error(error);
    }

    // setData({
    //   success: true,
    //   user: {
    //     _id: "64a2fde6220d96d29659f7d2",
    //     phone: "89990009999",
    //   },
    //   token:
    //     "tokenIsNotStaticItCanChange.eyJwaG9uZSI6Ijg5OTkwMDA5OTk5IiwiaWF0IjoxNzA1MzM2OTUzfQ.9G2lFBj4BtEjhQMJleZEmGx-dVewGJTzZK-pQ3mPin8",
    // });
  };
  {
    //так делать вообще правильно или это костыль из-за промиса
    data &&
      data.success &&
      navigate("/account", { state: { token: data.token } });
  }
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
