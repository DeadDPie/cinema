import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import cl from "./UserPaymentForm.module.scss";

const nameSchema = z
  .string()
  .min(2, "Минимальная длина - 2 символа")
  .max(30, "Максимальная длина - 30 символов");
const phoneSchema = z
  .string()
  .regex(/^\+?[0-9]{10,12}$/gm, "Неправильный формат телефона");

const validationSchema = z.object({
  name: nameSchema,
  surname: nameSchema,
  partonymic: nameSchema.optional(),
  phone: phoneSchema,
});

export const UserPaymentForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    partonymic: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      validationSchema.parse(user);
      console.log("Данные прошли валидацию");
      navigate("/payment", { state: { user: user } });
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
    }
  };

  return (
    <div className={cl.form}>
      <div className={cl.h}>Enter your details</div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Name*</p>
          <input
            required
            type="text"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <p>Surname*</p>
          <input
            required
            type="text"
            name="surname"
            value={user.surname || ""}
            onChange={handleChange}
          />
          {errors.surname && <span>{errors.surname}</span>}
        </div>
        <div>
          <p>Partonymic</p>
          <input
            type="text"
            name="partonymic"
            value={user.partonymic || ""}
            onChange={handleChange}
          />
          {errors.partonymic && <span>{errors.partonymic}</span>}
        </div>
        <div>
          <p>Phone number*</p>
          <input
            required
            type="text"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div className={cl.btn}>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};
