import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cl from "./Schedule.module.scss";
import { ModalDetailsPayment } from "../ModalDetailsPayment/ModalDetailsPayment";
import { Sessions } from "../Sessions/Sessions";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { UserPaymentForm } from "../UserPaymentForm/UserPaymentForm";
import { SuccessfullyPaid } from "../SuccessfullyPaid/SuccessfullyPaid";
export const Schedule = ({ name, movieId }) => {
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

  const [cinema, setCinema] = useState();

  const [modal, setModal] = useState(false);

  const setHall = (hall) => {
    console.log(hall);
    setCinema(hall);
  };
  const callbackModal = (modal) => {
    setModal(modal);
  };
  /**  */
  return (
    <>
      <ModalDetailsPayment visible={modal} setVisisble={setModal}>
        <UserPaymentForm></UserPaymentForm>
      </ModalDetailsPayment>
      <p style={{ color: "salmon", margin: "10px", fontSize: "48px" }}>
        Schedule
      </p>
      {schedules && <Sessions schedules={schedules} setHall={setHall} />}

      {cinema && (
        <CinemaHall
          name={name}
          movieId={movieId}
          cinema={cinema}
          callbackModal={callbackModal}
        ></CinemaHall>
      )}
    </>
  );
};
/*<ModalDetailsPayment visible={modal} setVisisble={setModal}>
        <SuccessfullyPaid />
      </ModalDetailsPayment>*/
