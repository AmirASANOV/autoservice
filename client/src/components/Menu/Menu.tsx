import React, { useEffect } from "react";
import s from "./Menu.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import { logout, setUser } from "../../store/user/userSlice";
import axios from "axios";

const Menu = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const { user, token } = useAppSelector((state) => state.user);

  console.log(user, token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(logout(null));
    navigate("/");
  };

  useEffect(() => {
    isAuth &&
      axios
        .get("http://localhost:1000/auth/getme", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        .then((response: any) => {
          console.log("User: " + response.data);
          dispatch(setUser({ user: response.data }));
        })

        .catch((error) => {
          console.error("Произошла ошибка:", error);
        });
  }, [isAuth]);

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
          <>
            <h1 className={s.username}>{user?.name}</h1>
            <button className={s.logout} onClick={HandleLogout}>
              logout
            </button>
          </>
        )}
        <div className={s.socials}>
          <img
            src="/preview/socials/1486147202-social-media-circled-network10_79475 (1) 1.svg"
            alt=""
          />
          <img
            src="/preview/socials/1491579542-yumminkysocialmedia22_83078 1.svg"
            alt=""
          />

          <img
            src="/preview/socials/1491580651-yumminkysocialmedia28_83061 1.svg"
            alt=""
          />
        </div>
      </div>
      <img src="/preview/man.png" alt="" />
    </div>
  );
};

export default Menu;
