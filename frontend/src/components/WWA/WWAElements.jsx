import styled from "styled-components";
import { Link } from "react-router-dom";
import i7 from "../../images/i7.jpg";

export const WWAContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 400px;
  position: relative;
  background-image: url(${i7});
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
  }
`;
export const WWABg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const WWAContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WWAH1 = styled.h1`
  color: #f3cd03;
  font-size: 36px;
  text-align: center;
  margin: 20px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const WWAH2 = styled.h1`
  color: #112d57;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const WWAP = styled.p`
  margin-top: 20px;
  color: black;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const Img = styled.img`
  padding-right: 10;
  border: 0;
  max-width: 100%;
  vertical-align: right;
  display: inline-block;
  max-height: 700px;
`;
export const WWABtnWrapper = styled.div`
  margin-top: 32px;
  border-radius: 80px;
  display: inline;
  flex-direction: column;
  align-items: center;
  color: #00b6f0;
  border-radius: 50px;
`;
export const WWAItemBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WWALinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const WWABtnLink = styled(Link)`
  border-radius: 50px;
  background: #00b6f0;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
