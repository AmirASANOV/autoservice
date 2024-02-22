import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Advantages from "../../components/Advantages/Advantages";
import Reviews from "../../components/Reviews/Reviews";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
import Menu from "../../components/Menu/Menu";
import { useAppSelector } from "../../store/hooks";
import Header from "../../components/Header/Header";

import RepairPreview from "../../components/Repair/RepairPreview";
import PriceList from "../../components/PriceList/PriceList";
import Tuning from "../../components/Tuning/Tuning";
import PriceWorking from "../../components/PriceWorking/PriceWorking";

const Preview = () => {
  const selector = useAppSelector((login) => login.user.isAuth);
  console.log(selector);
  return (
    <div>
      <Menu />
      <AboutUs />
      <Advantages />
      <Reviews />
      <WorkingHours />
    </div>
  );
};

export default Preview;
