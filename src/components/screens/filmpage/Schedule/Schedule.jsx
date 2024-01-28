import { useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { ModalDetailsPayment } from "../ModalDetailsPayment/ModalDetailsPayment";
import { Sessions } from "../Sessions/Sessions";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { UserPaymentForm } from "../UserPaymentForm/UserPaymentForm";
import { useSchedule } from "../../../../hooks/useSchedule.ts";
import { useUserSession } from "../../../../hooks/useUserSession.ts";

export const Schedule = ({ name, movieId }) => {
  const token = Cookies.get("userToken");

  const { filmId } = useParams();

  const [cinema, setCinema] = useState();
  const [modal, setModal] = useState(false);

  const schedules = useSchedule(filmId);
  const user = useUserSession(token, cinema);

  const setHall = (hall) => {
    console.log(hall);
    setCinema(hall);
  };
  const callbackModal = (modal) => {
    setModal(modal);
  };

  const isUserAuthorised = token && token.length > 0 ? true : false;

  return (
    <>
      {!isUserAuthorised && (
        <ModalDetailsPayment visible={modal} setVisisble={setModal}>
          <UserPaymentForm></UserPaymentForm>
        </ModalDetailsPayment>
      )}

      <p style={{ color: "salmon", margin: "10px", fontSize: "48px" }}>
        Schedule
      </p>
      {schedules && <Sessions schedules={schedules} setHall={setHall} />}

      {cinema && (
        <CinemaHall
          name={name}
          movieId={movieId}
          cinema={cinema}
          user={user}
          callbackModal={callbackModal}
        ></CinemaHall>
      )}
    </>
  );
};
