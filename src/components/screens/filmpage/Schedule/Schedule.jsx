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
  const [cinema, setCinema] = useState();

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
            <button key={index} onClick={() => setCinema(seance.hall)}>
              {seance.time}
            </button>
          ))}
      </div>
      <hr style={{ margin: "15px 0" }} />
      <div> {cinema && <p>Hallname: {cinema.name}</p>}</div>
      <div>
        {cinema &&
          cinema.places.map(
            (row, index) => console.log(row)
            //row.map((place) => console.log(place))
          )}
      </div>
      <div>
        {cinema &&
          cinema.places.map((row, index) => (
            <div>
              {row.map((place) => (
                <button
                  style={{
                    color: place.type === "ECONOM" ? "red" : "green",
                    margin: "5px 10px",
                  }}
                >
                  {place.price}
                </button>
              ))}
            </div>
          ))}
      </div>
      <div></div>
    </>
  );
};
