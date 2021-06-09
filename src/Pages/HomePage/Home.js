import React from "react";
import Cards from "../../components/Cards/Cards";
import EventCard from "../../components/EventCard/EventCard";
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
      <EventCard />
      <Cards />
    </>
  );
};

export default Home;
