import React, { useState } from "react";
import cl from "./Sessions.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  choseTime,
  choseDate,
} from "../../../../store/paymentDetails/paymentDetails.slice";

export const Sessions = ({ schedules, setHall }) => {
  const dispatch = useDispatch();
  const buy = (seance) => {
    setHall(seance.hall);
    dispatch(choseTime(seance.time));
    console.log(seance.time);
  };
  const choseDateToBuy = (schedule) => {
    setSeancesDate(schedule.seances);
    dispatch(choseDate(schedule.date));
    console.log(schedule.date);
  };

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
              onClick={() => choseDateToBuy(schedule)}
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
                seance.hall.name === "Red" && cl.redHall
              } ${seance.hall.name === "Green" && cl.greenHall} ${
                seance.hall.name === "Blue" && cl.blueHall
              }}`}
              key={index}
              onClick={() => buy(seance)}
            >
              {seance.time}
            </button>
          ))}
      </div>
    </div>
  );
};
