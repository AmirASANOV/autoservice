import React from "react";
import s from "./Tuning.module.scss";

const Tuning = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.shadow}>
        <p className={s.title}>Тюнинг авто</p>
      </div>
      <img className={s.img} src="/tuning/tuning.png" alt="logo" />
    </div>
  );
};

export default Tuning;
