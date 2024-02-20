import s from "./Advantages.module.scss";
import React from "react";

const Advantages = () => {
  return (
    <div className={s.wrapper}>
      <h1>Преимущества нашей компании</h1>

      <div className={s.container}>
        <div className={s.item}>
          <img className={s.img} src="/advantage/pngwing 6.png" alt="" />
          Удобные способы оплаты Наличными, банковской картой Банковским
          переводом
        </div>
        <div className={s.item}>
          <img className={s.img} src="/advantage/pngwing 6.png" alt="" />
          Работаем круглосуточно Без перерыров Без выходных
        </div>
        <div className={s.item}>
          <img className={s.img} src="/advantage/pngwing 6.png" alt="" />
          Гарантия на все виды работ История обращений в автосервис Скидки
          постоянным клиентам
        </div>
        <div className={s.item}>
          <img className={s.img} src="/advantage/pngwing 6.png" alt="" />
          Комната для клиентов Бесплатный Wi-Fi, мягкие диваны Телевизор и
          кофемашина
        </div>
        <div className={s.item}>
          <img className={s.img} src="/advantage/pngwing 6.png" alt="" />
          Собственный магазин-склад автозапчастей, товар в наличии Низкие цены
        </div>
        <div className={s.item}>
          <img className={s.img} src="/advantage/pngwing 6.png" alt="" />
          Выполняем все виды работ по ремонту и техническому обслуживанию
          автомобилей
        </div>
      </div>
    </div>
  );
};

export default Advantages;
