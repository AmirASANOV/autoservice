import React from "react";
import Preview from "./components/Preview/Preview";
import s from "./App.module.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
  return (
    <div className={s.wrapper}>
      <Preview />
      <AboutUs />
      <Advantages />
      <Reviews />
    </div>
  );
};

export default App;
