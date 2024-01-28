import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = (phone: number, code: string) => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/users/signin",
      data: { phone: `${phone}`, code: parseInt(code) },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);

      response.data.success &&
        navigate("/account", { state: { token: response.data.token } });
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};

export const useRequestCode = (phone: number) => {
  const handleRequestCode = async () => {
    const options = {
      method: "POST",
      url: "https://shift-backend.onrender.com/auth/otp",
      data: { phone: `${phone}` },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return handleRequestCode;
};
