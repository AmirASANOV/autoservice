import React from "react";
import s from "./Repair.module.scss";

const RepairPreview = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.title}>Ремонт и профилактика автомобиля</p>
      </div>
      <img className={s.img} src="/repair/img.png" alt="img" />
    </div>
  );
};

export default RepairPreview;
