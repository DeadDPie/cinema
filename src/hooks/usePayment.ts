import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSuccessful } from "../store/paymentDetails/paymentDetails.slice.ts";

interface IUser {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: number;
}
interface IdebitCard {
  pan: string;
  expireDate: string;
  cvv: string;
}
interface IPlaces {
  row: string;
  seat: string;
}

export const usePayment = (
  movieId: number,
  user: IUser,
  debitCard: IdebitCard,
  date: string,
  time: string,
  places: IPlaces
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyTicket = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/cinema/payment",
      data: {
        filmId: `${movieId}`,
        person: {
          firstname: `${user.firstname}`,
          lastname: `${user.lastname}`,
          middlename: `${user.middlename}`,
          phone: `${user.phone}`,
        },
        debitCard: {
          pan: `${debitCard.pan}`,
          expireDate: `${debitCard.expireDate}`,
          cvv: `${debitCard.cvv}`,
        },
        seance: {
          date: `${date}`,
          time: `${time}`,
        },
        tickets: [
          {
            row: parseInt(places.row),
            column: parseInt(places.seat),
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      response.data.success &&
        dispatch(setSuccessful(true)) &&
        navigate(`/film/${movieId}`);
    } catch (error) {
      console.error(error);
    }
  };
  return buyTicket;
};
