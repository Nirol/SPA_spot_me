import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../constants/device";
import { HeadingSpan } from "../constants/SharedStyles/Heading";
import { ItemTitle } from "../constants/SharedStyles/Item";
import Burger from "./Burger";

const BACKGROUND = "linear-gradient(60deg, #29323c 0%, #485563 100%)";
const TRANSPARENT_BACKGROUND =
  "linear-gradient(90deg, rgba(41,50,60,0.5) 0%, rgba(72,85,99,0.5) 100%)";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    function handleScrollY() {
      if (window.scrollY > 250) {
        setHeaderBackground(true);
      } else setHeaderBackground(false);
    }

    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  const switchMenuState = (): void => {
    setMenuOpen(!menuOpen);
  };
  return (
    <React.Fragment>
      <Container
        background={headerBackground ? BACKGROUND : TRANSPARENT_BACKGROUND}
      >
        <Navbar>
          <HeaderTitle>
            <HeadingSpan>N</HeadingSpan>ir Gil<HeadingSpan>a</HeadingSpan>d
          </HeaderTitle>

          <NavList>
            <Burger menuOpen={menuOpen} updateMenuOpen={setMenuOpen} />

            <LinkList leftAttribute={menuOpen ? "0" : "100%"}>
              <ListItem>
                <Link onClick={switchMenuState} href="#hero" linkText={"Home"}>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  onClick={switchMenuState}
                  href="#projects"
                  linkText={"Projects"}
                >
                  Projects
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  onClick={switchMenuState}
                  href="#skills"
                  linkText={"Skills"}
                >
                  Skills
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  onClick={switchMenuState}
                  href="#thesis"
                  linkText={"Thesis"}
                >
                  Thesis
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  onClick={switchMenuState}
                  href="#about-me"
                  linkText={"About"}
                >
                  About Me
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  onClick={switchMenuState}
                  href="#contact-info"
                  linkText={"Contact"}
                >
                  Contact
                </Link>
              </ListItem>
            </LinkList>
          </NavList>
        </Navbar>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  min-height: 8vh;
  background: ${({ background }) => background};
  transition: 0.3s ease background;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  padding: 0 10px;
`;

const HeaderTitle = styled(ItemTitle)`
  font-size: 1.6rem;
  font-weight: 600;
`;

const NavList = styled.div``;

const LinkList = styled.ul<{ leftAttribute: string }>`
  list-style: none;
  position: absolute;
  background: ${BACKGROUND};
  width: 100vw;
  height: 100vh;
  left: ${({ leftAttribute }) => leftAttribute};
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s ease left;
  padding: 0;
  margin: 0;
  padding-left: 20px;

  @media ${device.laptop} {
    position: initial;
    display: block;
    height: auto;
    width: fit-content;
    background: transparent;
  }
`;
const ListItem = styled.li`
  &:hover {
    a {
      color: ${(props) => props.theme.mainColor};
      &::after {
        transform: translate(-50%, -50%) scale(1);
        letter-spacing: initial;
      }
    }
  }

  @media ${device.laptop} {
    display: inline-block;
    background: transparent;
    &:hover {
      &::after {
        display: none;
      }
    }
  }
`;

const Link = styled.a<{ linkText: string }>`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: ${(props) => props.theme.mainTextBrightColor};
  text-transform: uppercase;
  padding-top: 10px;
  margin-right: 35px;
  display: block;
  &::after {
    content: "${({ linkText }) => linkText}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: rgba(240, 248, 255, 0.21);
    font-size: 5rem;
    letter-spacing: 50px;
    z-index: -1;
    transition: 0.3s ease letter-spacing;
  }

  @media ${device.laptop} {
    font-size: 1.1rem;
    font-weight: 700;
    &:after {
      display: none;
    }
  }
`;

export default Header;
