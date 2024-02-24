import React, { useState } from "react";
import s from "./PriceList.module.scss";
import Modal from "../Modal/Modal";
import axios from "axios";
import { login } from "../../store/user/userSlice";

interface IOrder {
  visitDate: string;
  nameCar: string;
  repairType: string;
}

const PriceList = () => {
  const [active, setActive] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  console.log(isSuccess);

  const [value, setValue] = useState<IOrder>({
    visitDate: "",
    nameCar: "",
    repairType: "",
  });

  console.log(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const successActivate = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setActive(false);
    }, 2000);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:1000/orders", value, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response: any) => {
        console.log("Успешно:" + response.data);
        successActivate();
      })

      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.section}>
        <p className={s.title}>
          Профессиональная диагностика ходовой части автомобиля на вибростенде
          (люфт-детекторе):
        </p>

        <p className={s.description}>
          Стоимость диагностики на вибростенде в Новосибирске:
          <br />
          легковой автомобиль (вибростенд)- 1000 рублей;
          <br />
          джип, микроавтобус, минивэн (вибростенд) - 1300 рублей;
          <br />
          инструментальная диагностика ходовой на подъёмнике - 500 рублей.
          <br />
          На вибростенде, помимо диагностики всей подвески на люфт-детекторе,
          также проверяются:
          <br />• Остаточность амортизационных стоек в процентах;
          <br />• Усилия переднего, заднего и ручного тормозов;
          <br />• Овальность (биентие) тормозных дисков;
          <br />• Угол сход-развала колёс.
        </p>
      </div>

      <div className={s.section}>
        <p className={s.title}>Компьютерная диагностика двигателя</p>
        <p className={s.descripiton}>
          В зависимости от вашей марки автомобиля цена может быть разной в
          районе 1000р-20000р
        </p>
      </div>

      <div className={s.section}>
        <p className={s.title}>Качественный ремонт автомобиля</p>
        <p className={s.description}>
          Стоймость ремонта автомобиля будет зависить от вашей марки
          автомобиля,количеству работы и цене запчастей. Чтобы узнать точную
          цену ремонта автомобиля нужно обратиться в поддержку либо приехать в
          автосервис и узнать цену на месте
        </p>
      </div>

      <button onClick={() => setActive(!active)} className={s.button}>
        Записаться
      </button>

      <Modal active={active} setActive={setActive}>
        <p className={s.textModal}>Введите данные вашего авто</p>

        <p className={s.textModal}>Марка авто:</p>
        <input
          onChange={handleChange}
          name="nameCar"
          value={value.nameCar}
          type="text"
          placeholder="BMW"
        />

        <p className={s.textModal}>Тип ремонта</p>
        <input
          onChange={handleChange}
          name="repairType"
          value={value.repairType}
          type="text"
          placeholder="Тотал"
        />

        <p className={s.textModal}>Дата:</p>
        <input
          onChange={handleChange}
          name="visitDate"
          value={value.visitDate}
          type="text"
          placeholder="2000-11-22T00:00:00.000Z"
        />

        <button onClick={handleSubmit}>send</button>
      </Modal>

      <Modal active={isSuccess} setActive={setIsSuccess}>
        <p className={s.textModal}>Заявка успешно создана!</p>
      </Modal>
    </div>
  );
};

export default PriceList;
