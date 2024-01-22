import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { ModalDetailsPayment } from "../ModalDetailsPayment/ModalDetailsPayment";
import { Sessions } from "../Sessions/Sessions";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { UserPaymentForm } from "../UserPaymentForm/UserPaymentForm";

export const Schedule = ({ name, movieId }) => {
  const token = Cookies.get("userToken");

  const [schedules, setSchedules] = useState();
  const [cinema, setCinema] = useState();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({ phone: "" });

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
  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "https://shift-backend.onrender.com/users/session",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(options);
        //console.log(response.data);
        response.data.success &&
          setUser({ ...user, phone: response.data.user.phone });
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, [schedules, cinema]);

  const setHall = (hall) => {
    console.log(hall);
    setCinema(hall);
  };
  const callbackModal = (modal) => {
    setModal(modal);
  };

  const isUserAuthorised = token && token.length > 0 ? true : false;

  //const isUserAuthorised = useSelector((state) => state.user.isAuthorised);
  //const user = useSelector((state) => state.user);
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
