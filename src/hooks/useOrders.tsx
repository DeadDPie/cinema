import { useEffect, useState } from "react";
import axios from "axios";

export const useOrders = (token: string) => {
  const [tickets, setTickets] = useState();

  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "https://shift-backend.onrender.com/cinema/orders",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setTickets(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return tickets;
};
