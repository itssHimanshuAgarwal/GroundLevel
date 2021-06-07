import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, Values } from "./Data";
import WWA from "../../components/WWA";

function WhatWeDo() {
  return (
    <>
      <WWA {...Values} />
      <InfoSection {...homeObjOne} /> <InfoSection {...homeObjThree} />{" "}
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default WhatWeDo;
