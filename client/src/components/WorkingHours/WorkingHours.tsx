import React from "react";
import s from "./WorkingHours.module.scss";

const WorkingHours = () => {
  return (
    <div className={s.wrapper}>
      <p>Время работы: Пн-Пт 8:00 - 19:00 Сб-Вс 10:00 - 17:00</p>
      <p>
        Open Drive 630112, Красноярск, ул. Писарева, 147а Телефон: +7 (383) 375
        0000; +7 (383) 292 0052
      </p>
      <p>© ООО «OpenDrive», 2010—2022</p>
    </div>
  );
};

export default WorkingHours;
