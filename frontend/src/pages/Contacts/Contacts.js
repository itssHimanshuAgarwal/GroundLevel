import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, Values } from "./Data";
import WWA from "../../components/WWA";

function Contacts() {
  return (
    <>
      <WWA {...Values} />
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Contacts;
