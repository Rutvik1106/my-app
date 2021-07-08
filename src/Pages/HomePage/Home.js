import React from "react";
import EventCard from "../../components/EventCard/EventCard";
import InfoSection from "../../components/InfoSection/InfoSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import ContactUsForm from "../../components/ContactusFrom/ContactUsForm";
import { homeObjOne, homeObjTwo, homeObjThree, SliderData } from "./Data";

const Home = () => {
  return (
    <>
      {/* <InfoSection {...homeObjOne} /> */}
      <VideoPlayer />
      {/* <ImageGalleryCard /> */}
      <InfoSection {...homeObjTwo} />
      <EventCard />
      <InfoSection {...homeObjThree} />
      {/* <NewsCard /> */}
      <ContactUsForm />
    </>
  );
};

export default Home;
