import React, { useState } from "react";
import cl from "./CinemaHall.module.scss";
export const CinemaHall = ({ name, cinema, callbackModal }) => {
  const [place, setPlace] = useState({ row: "", placeNumber: "", price: "" });
  return (
    <div>
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
            <p>{name}</p>
            <p className={cl.h1}>Places</p>
            <p>
              Row: {place.row} Seat number: {place.placeNumber}
            </p>
          </div>
          <div className={cl.cost}>
            <p>Full price</p>
            <p>{place.price}</p>
            <button className={cl.btn} onClick={() => callbackModal(true)}>
              Buy <i className="bx bx-credit-card-front"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
