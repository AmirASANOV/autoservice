import React from "react";
import Preview from "./components/Preview/Preview";
import s from "./App.module.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/Reviews";
import WorkingHours from "./components/WorkingHours/WorkingHours";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

const App = () => {
  return (
    <div className={s.wrapper}>
      {/* <Preview />
      <AboutUs />
      <Advantages />
      <Reviews />
      <WorkingHours /> */}
      {/* <Login /> */}
      <Registration />
    </div>
  );
};

export default App;
