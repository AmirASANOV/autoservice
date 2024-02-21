import React, { useState } from "react";
import s from "./Login.module.scss";
import axios from "axios";

interface IValue {
  email: string;
  password: string;
}

const Login = () => {
  const [value, setValue] = useState<IValue>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:1000/auth/login", value)

      .then((response) => {
        console.log("Ответ сервера:", response);
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  };

  return (
    <div className={s.wrapper}>
      <input
        value={value.email}
        onChange={handleChange}
        className={s.input}
        type="text"
        name="email"
        placeholder="email@gmail.com"
      />
      <input
        value={value.password}
        onChange={handleChange}
        className={s.input}
        type="password"
        name="password"
        placeholder="password"
      />
      <button onClick={handleSubmit} className={s.button}>
        Login
      </button>
    </div>
  );
};

export default Login;
