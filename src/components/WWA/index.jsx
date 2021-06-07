import React from "react";
import { WWAContainer, WWAContent, WWAH1, WWAH2, WWAP } from "./WWAElements";

function WWA({ t1, t2, t3 }) {
  return (
    <>
      <WWAContainer id="home">
        <WWAContent>
          <br></br>
          <br></br>
          <WWAH1> {t1}</WWAH1>
          <WWAH2> {t2}</WWAH2>
          <WWAP> {t3}</WWAP>
        </WWAContent>
      </WWAContainer>
    </>
  );
}

export default WWA;
