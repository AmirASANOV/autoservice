import React from "react";
import s from "./App.module.scss";
import Preview from "./pages/Preview/Preview";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

const App = () => {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
