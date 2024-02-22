import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Advantages from "../../components/Advantages/Advantages";
import WorkingHours from "../../components/WorkingHours/WorkingHours";
import Menu from "../../components/Menu/Menu";

const AboutUsPage = () => {
  return (
    <div>
      <Menu />
      <AboutUs />
      <Advantages />
      <WorkingHours />
    </div>
  );
};

export default AboutUsPage;
