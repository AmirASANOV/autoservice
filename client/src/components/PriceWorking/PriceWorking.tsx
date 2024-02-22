import React from "react";
import s from "./PriceWorking.module.scss";

const PriceWorking = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.description}>
          Обратите внимание! Цены на составляющие зависят от вашей марки
          автомобиля
        </p>
        <p className={s.price}>
          Средняя цена за работу:
          <br />1 час - 2500р <br /> 3 часа - 6500р <br /> 6 часов - 10000р
        </p>
      </div>
    </div>
  );
};

export default PriceWorking;
