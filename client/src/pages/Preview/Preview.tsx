import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Advantages from "../../components/Advantages/Advantages";
import Reviews from "../../components/Reviews/Reviews";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
import Menu from "../../components/Menu/Menu";
import { useAppSelector } from "../../store/hooks";
import Header from "../../components/Header/Header";

const Preview = () => {
  const selector = useAppSelector((login) => login.user.isAuth);
  console.log(selector);
  return (
    <div>
      <Header />
      <Menu />
      <AboutUs />
      <Advantages />
      <Reviews />
      <WorkingHours />
    </div>
  );
};

export default Preview;
