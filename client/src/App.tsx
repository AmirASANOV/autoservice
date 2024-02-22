import React from "react";
import s from "./App.module.scss";
import Preview from "./pages/Preview/Preview";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Services from "./pages/Services/Services";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Forum from "./pages/Forum/Forum";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const selector = useAppSelector((state) => state.user.isAuth);

  return (
    <div className={s.wrapper}>
      {selector && (
        <>
          <Header />
        </>
      )}

      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {selector && (
          <>
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/forum" element={<Forum />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
