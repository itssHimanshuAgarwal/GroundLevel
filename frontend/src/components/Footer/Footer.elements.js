import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #112D57;
  padding: 4rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  height:20px;
  justify-content: center;
  align-items: center;
`;

export const SocialMedia = styled.section`
  max-width: 1350px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: right;
  width: 120px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;


export const FootItemBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const FootBtnLink = styled(Link)
`
border-radius: 50px;
background: #112D57;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: 1px solid white ;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`