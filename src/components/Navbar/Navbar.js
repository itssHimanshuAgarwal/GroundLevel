import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {" "}
              {click ? <FaTimes /> : <FaBars />}{" "}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/whoweare" onClick={closeMobileMenu}>
                  Who We Are{" "}
                </NavLinks>{" "}
              </NavItem>{" "}
              <NavItem>
                <NavLinks to="/whatwedo" onClick={closeMobileMenu}>
                  What We Do{" "}
                </NavLinks>{" "}
              </NavItem>
              <NavItem>
                <NavLinks to="/contacts" onClick={closeMobileMenu}>
                  Contact{" "}
                </NavLinks>{" "}
              </NavItem>
              <NavItem></NavItem>
            </NavMenu>
            {/* <NavMenu onClick={handleClick} click={click}>
              <NavItemBtn>
                {" "}
                {button ? (
                  <NavBtnLink to="/login">Login </NavBtnLink>
                ) : (
                  <NavBtnLink to="/login">
                    <Button onClick={closeMobileMenu} fontBig>
                      Login{" "}
                    </Button>{" "}
                  </NavBtnLink>
                )}{" "}
              </NavItemBtn>{" "}
            </NavMenu> */}
            <NavMenu></NavMenu>
          </NavbarContainer>{" "}
        </Nav>{" "}
      </IconContext.Provider>{" "}
    </>
  );
}

export default Navbar;
