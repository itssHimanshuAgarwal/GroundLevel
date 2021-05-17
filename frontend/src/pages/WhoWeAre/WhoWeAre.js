import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, Values } from "./Data";
import Services from "../../components/Services";
import WWA from "../../components/WWA";

function WhoWeAre() {
  return (
    <>
      <WWA {...Values} />
      <InfoSection {...homeObjOne} />
      <Services />
    </>
  );
}

export default WhoWeAre;
