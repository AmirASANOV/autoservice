import React, { useState } from "react";
import s from "./Registration.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/user/userSlice";

interface IValue {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const Registration = () => {
  const [value, setValue] = useState<IValue>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:1000/auth/registration", value)

      .then((response: any) => {
        dispatch(login({ token: response.data }));
        navigate("/");
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  };

  return (
    <div className={s.wrapper}>
      <input
        value={value.name}
        onChange={handleChange}
        className={s.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        value={value.email}
        onChange={handleChange}
        className={s.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        value={value.password}
        onChange={handleChange}
        className={s.input}
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        value={value.phoneNumber}
        onChange={handleChange}
        className={s.input}
        type="text"
        name="phoneNumber"
        placeholder="+7-999-999-99-99"
      />
      <button onClick={handleSubmit} className={s.button}>
        Registration
      </button>
    </div>
  );
};

export default Registration;
