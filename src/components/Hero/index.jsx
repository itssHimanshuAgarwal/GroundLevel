import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  Img,
  HeroBtnLink,
  HeroBtn2Link,
  HeroItemBtn,
} from "./HeroElements";

import i4 from "../../images/i4.PNG";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
          <HeroH1>Ground Level Initiative</HeroH1>
          <HeroP>
            Lorem Ipsum has been the industry 's standard dummy text ever since
            the when an unknown printer took a galley of type and scrambled it
            to make a type specimen book
          </HeroP>
          <br></br>
          {/* <HeroItemBtn>
            <HeroBtnLink to="/contacts">Join</HeroBtnLink>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* <HeroBtn2Link to="/login">Login </HeroBtn2Link>
          </HeroItemBtn> */}
          <br></br>
          <br></br>
          <br></br>
          <Img src={i4} />
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
