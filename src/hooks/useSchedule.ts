import { useEffect, useState } from "react";
import axios from "axios";

export const useSchedule = (filmId: number) => {
  const [schedules, setSchedules] = useState();

  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: `https://shift-backend.onrender.com/cinema/film/${filmId}/schedule`,
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.schedules);
        setSchedules(response.data.schedules);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return schedules;
};
