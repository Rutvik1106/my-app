import React from "react";
import { homeObjThree } from "../HomePage/Data";
import InfoSection from "../../components/InfoSection/InfoSection";
import ContactUsForm from "../../components/ContactusFrom/ContactUsForm";
const News = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <ContactUsForm />
    </>
  );
};

export default News;
