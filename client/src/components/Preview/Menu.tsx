import React from "react";
import s from "./Preview.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <img className={s.headerLogo} src="/header/logo.svg" alt="logo" />
        <p className={s.brandName}>open drive</p>
        <p className={s.brandDescription}>Сеть автосервисов</p>
        <Link to="/registration" className={s.button}>
          Регистрация
        </Link>
        <div className={s.auth}>
          <p className={s.text}>Уже есть аккаунт?</p>
          <Link to="/login" className={s.btn}>
            Войти
          </Link>
        </div>
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
