import axios from "axios";

export const useCanceledTicket = (
  token: string,
  id: string
): React.MouseEventHandler<HTMLButtonElement> => {
  const handleButtonClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = async () => {
    const options = {
      method: "PUT",
      url: "https://shift-backend.onrender.com/cinema/orders/cancel",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        orderId: `${id}`,
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return handleButtonClick;
};
