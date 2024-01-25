export const useCanceledTicket = (token, id) => {
  const handleButtonClick = async () => {
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
};
