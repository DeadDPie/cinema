import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
//import { DateButton } from "./DateButton";

export const Schedule = () => {
  const [schedules, setSchedules] = useState();
  const { filmId } = useParams();
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
  /**<button>{schedule.seances.time}</button> {schedules &&
          schedules.map((schedule) => {
            schedule.seances.map((seance) => <button>ddf{seance}</button>);
          })}
          {schedules &&
          schedules.map((schedule) => (
            <DateButton seances={schedule.seances}>{schedule.date}</DateButton>
          ))}*/
  //console.log(schedules.map((schedule) => schedule.seances));

  let tm = [];
  if (schedules) {
    const seances = schedules.map((schedule) => schedule.seances);
    for (let date of seances) {
      tm = [];
      for (let time of date) {
        tm.push(time);
        //console.log(time);
      }
      //console.log(tm);
      //console.log(tm[0]);
    }
    console.log(seances);
  }
  const [seancesDate, setSeancesDate] = useState();
  const changeDate = (date) => {
    //setSeancesDate(seances.filter((d) => d.id === date.id));
    //возвращает новый массив, отфильтрованный по какому-то условию,
    //здесь мы просто проверяем id
  };

  return (
    <>
      <p>schedule</p>
      <div>
        {schedules &&
          schedules.map((schedule, index) => (
            <button
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
            <button key={index}>{seance.time}</button>
          ))}
      </div>
    </>
  );
};
