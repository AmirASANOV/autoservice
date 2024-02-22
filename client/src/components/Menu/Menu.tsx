import React from "react";
import s from "./Menu.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";

const Menu = () => {
  const isAuth = useAppSelector((login) => login.user.isAuth);
  const username = useAppSelector((login) => login.user.username);
  console.log(username);

  return (
    <div className={s.wrapper}>

      <div className={s.text}>
        <p className={s.brandName}>open drive</p>
        <p className={s.brandDescription}>Сеть автосервисов</p>

        {!isAuth ? (
          <>
            <Link to="/registration" className={s.button}>
              Регистрация
            </Link>
            <div className={s.auth}>
              <p className={s.text}>Уже есть аккаунт?</p>
              <Link to="/login" className={s.btn}>
                Войти
              </Link>
            </div>
          </>
        ) : (
          <h1 className={s.username}>{username}</h1>
        )}
        <div className={s.socials}>
          <img
            src="/preview/socials/1486147202-social-media-circled-network10_79475 (1) 1.svg"
            alt=""
          />
          <img
            src="/preview/socials/1486147202-social-media-circled-network10_79475 (1) 1.svg"
            alt=""
          />
          <img
            src="/preview/socials/1486147202-social-media-circled-network10_79475 (1) 1.svg"
            alt=""
          />
          <img
            src="/preview/socials/1486147202-social-media-circled-network10_79475 (1) 1.svg"
            alt=""
          />
        </div>
      </div>
      <img src="/preview/man.png" alt="" />
    </div>
  );
};

export default Menu;
