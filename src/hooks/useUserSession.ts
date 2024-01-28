import { useEffect, useState } from "react";
import axios from "axios";

export const useUserSession = (token: string, cinema: object) => {
  const [user, setUser] = useState({ phone: "" });

  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "https://shift-backend.onrender.com/users/session",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(options);
        //console.log(response.data);
        response.data.success &&
          setUser({ ...user, phone: response.data.user.phone });
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, [cinema]);

  return user;
};
