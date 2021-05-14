import styled from 'styled-components';
import { Link } from 'react-router-dom';
import i7 from '../../images/i7.jpg'

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(${i7});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;


export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
  }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroH1 = styled.h1`
  color: #112D57;
  font-size:40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 480px) {
    font-size: 32px
  }
`

export const HeroP = styled.p`
  margin-top: 20px;
  color:black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px
  }
  @media screen and (max-width: 480px) {
    font-size: 18px
  }
`
export const Img = styled.img `
  padding-right: 10;
  border: 0;
  max-width: 100%;
  vertical-align: right;
  display: inline-block;
  max-height: 700px;
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  border-radius: 80px;
  display: inline;
  flex-direction: column;
  align-items: center;
  color:#00B6F0;
  border-radius: 50px;
`
export const HeroItemBtn = styled.nav`
display: flex;
align-items: center;
flex-direction: row;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const HeroLinks = styled(Link)
`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #01bf71
}
`

export const HeroBtnLink = styled(Link)
`
border-radius: 50px;
background: #00B6F0;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`
export const HeroBtn2Link = styled(Link)
`
border-radius: 50px;
background: white;
white-space: nowrap;
padding: 10px 22px;
color: black;
font-size: 16px;
outline: none;
border: 1px solid #00B6F0;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`