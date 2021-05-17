import React from "react";
import i7 from "../../images/i7.PNG";
import i8 from "../../images/i8.PNG";
import i9 from "../../images/i9.PNG";
import {
  ServicesContainer,
  ServicesH1,
  ServicesHs,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>The Team</ServicesH1>
      <ServicesHs>
        Being a freelancer is a rollercoaster of emotions. We built Slate to
        keep your
      </ServicesHs>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={i7} />
          <ServicesH2>Clean Simple</ServicesH2>
          <ServicesP>12 Lokasi</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={i8} />
          <ServicesH2>Cafe Ambience</ServicesH2>
          <ServicesP>12 Lokasi</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={i9} />
          <ServicesH2>Home Office</ServicesH2>
          <ServicesP>12 Lokasi</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
