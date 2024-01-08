import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import cl from "./Schedule.module.css";

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

  if (schedules) {
    const seances = schedules.map((schedule) => schedule.seances);
  }
  const [seancesDate, setSeancesDate] = useState();
  const [cinema, setCinema] = useState();
  const [place, setPlace] = useState({ row: "", placeNumber: "", price: "" });

  return (
    <>
      <p style={{ color: "salmon", margin: "10px", fontSize: "48px" }}>
        Schedule
      </p>
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
              onClick={() => setCinema(seance.hall)}
            >
              {seance.time}
            </button>
          ))}
      </div>

      {cinema && (
        <div className={cl.schedule}>
          <div className={cl.cinema}>
            {cinema &&
              cinema.places.map((row, indexRow) => (
                <div>
                  {row.map((place, indexPlace) => (
                    <button
                      onClick={() =>
                        setPlace({
                          ...place,
                          row: indexRow + 1,
                          price: place.price,
                          placeNumber: indexPlace + 1,
                        })
                      }
                      className={`${cl.place} ${
                        place.type === "ECONOM" ? cl.econom : cl.comfort
                      } ${place.price == 0 ? cl.blocked : ""}`}
                    ></button>
                  ))}
                </div>
              ))}
          </div>
          <div className={cl.ticket}>
            <div className={cl.info}>
              <div>
                <p className={cl.h1}>Hallname: </p>
                {cinema && <p>{cinema.name}</p>}
              </div>
              <p className={cl.h1}>Film:</p>
              <p>here must be film name</p>
              <p className={cl.h1}>Places</p>
              <p>
                Row: {place.row} Seat number: {place.placeNumber}
              </p>
            </div>
            <div className={cl.cost}>
              <p>Full price</p>
              <p>{place.price}</p>
              <button className={cl.btn}>
                Buy <i className="bx bx-credit-card-front"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
