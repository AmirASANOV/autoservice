import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.headerLogo} src="/header/logo.svg" alt="logo" />

      <ul className={s.links}>
        <Link className={s.link} to={"/"}>
          Главная
        </Link>
        <Link className={s.link} to={""}>
          Услуги
        </Link>
        <Link className={s.link} to={""}>
          О нас
        </Link>
        <Link className={s.link} to={""}>
          Контакты
        </Link>
        <Link className={s.link} to={""}>
          Форум
        </Link>
      </ul>
    </div>
  );
};

export default Header;
