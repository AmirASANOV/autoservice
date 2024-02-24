import React, { useEffect } from "react";
import s from "./App.module.scss";
import Preview from "./pages/Preview/Preview";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Services from "./pages/Services/Services";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Forum from "./pages/Forum/Forum";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import axios from "axios";

const App = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  console.log(isAuth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  

  return (
    <div className={s.wrapper}>
      {isAuth && (
        <>
          <Header />
        </>
      )}

      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {isAuth && (
          <>
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/forum" element={<Forum />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
