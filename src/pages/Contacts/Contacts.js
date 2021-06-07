import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, Values } from "./Data";
import WWA from "../../components/WWA";
// import ContactForm from "../../components/Form";

function Contacts() {
  return (
    <>
      <WWA {...Values} />
      <InfoSection {...homeObjOne} />
      {/* <ContactForm /> */}
    </>
  );
}

export default Contacts;
