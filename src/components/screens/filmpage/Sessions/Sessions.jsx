import React, { useState } from "react";
import cl from "./Sessions.module.scss";

export const Sessions = ({ schedules, setHall }) => {
  const [seancesDate, setSeancesDate] = useState();
  return (
    <div className={cl.schedule}>
      <div>
        {schedules &&
          schedules.map((schedule, index) => (
            <button
              className={`${cl.btn} ${
                seancesDate === schedule.seances ? cl.clicked : ""
              }`}
              key={index}
              onClick={() => setSeancesDate(schedule.seances)}
            >
              {schedule.date}
            </button>
          ))}
      </div>

      <div>
        {seancesDate &&
          seancesDate.map((seance, index) => (
            <button
              className={`${cl.time} ${
                seance.hall.name === "Red"
                  ? cl.redHall
                  : seance.hall.name === "Green"
                  ? cl.greenHall
                  : cl.blueHall
              }`}
              key={index}
              onClick={() => setHall(seance.hall)}
            >
              {seance.time}
            </button>
          ))}
      </div>
    </div>
  );
};
