import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import BootstrapSlider from "./BootstrapSlider";
import { homeObjOne,homeObjTwo,homeObjThree,SliderData } from "./Data";
import ImageSlider from "./Slider";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <ImageSlider slides={SliderData} /> 
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home;
