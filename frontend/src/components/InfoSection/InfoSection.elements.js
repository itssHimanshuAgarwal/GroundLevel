import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 20px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  height: 600px;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  margin: 10px;
  padding-top: 10px;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 16px;
  line-height: 16px;
  font: Spartan;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-left: 15px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 10;
  border: 0;
  max-width: 100%;
  vertical-align: right;
  display: inline-block;
  max-height: 700px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  font: Spartan;
  margin-left: 15px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font: Spartan;
  font-size: 18px;
  margin-left: 15px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
