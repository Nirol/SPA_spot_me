import React from "react";
import styled, { keyframes } from "styled-components";
import img from "../assets/images/hero-bg.jpg";

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroContainer>
        <HeroTextWrapper>
          <HeroText>
            Hello, <BoxAnimation />
          </HeroText>

          <HeroText>
            My Name Is <BoxAnimation />
          </HeroText>
          <HeroText>
            Nir Gilad
            <BoxAnimation />
          </HeroText>

          <PortfolioButton href="#" type="button">
            Portfolio
          </PortfolioButton>
        </HeroTextWrapper>
      </HeroContainer>
    </React.Fragment>
  );
}

const HeroTextWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding 0 50px;
justify-content: flex-start;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    z-index: -1;
  }
`;

const PortfolioButton = styled.a`
  display: inline-block;
  padding: 10px 30px;

  text-decoration: none;
  color: ${(props) => props.theme.mainColor};
  border: 2px solid ${(props) => props.theme.mainColor};
  background-color: transparent;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 30px;
  transition: 0.3s ease background-color;
  transition-property: background-color, color;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.mainColor};
  }
`;

const text_reveal = keyframes`
  100% {
color: white;
  }`;

/* We cant pass props to keyframe which only return string, 
so we wrap it in a function*/
function text_reveal_name_animation(props: any) {
  return keyframes`
      100% {
          color: ${props.theme.mainColor};
          font-weight: 800;
        }`;
}

const HeroText = styled.h1`
  display: block;
  width: fit-content;
  font-size: 4rem;
  position: relative;
  color: transparent;
  animation: ${text_reveal} 0.5s ease forwards;
  animation-delay: 1s;
  &:nth-child(1) {
    animation-delay: 1s;
  }
  &:nth-child(2) {
    animation-delay: 2s;
  }
  &:nth-child(3) {
    animation: ${(props) => text_reveal_name_animation(props)} 0.5s ease
      forwards;
    animation-delay: 3s;
    font-weight: 800;
  }

  &:nth-child(1) span {
    animation-delay: 1s;
  }
  &:nth-child(2) span {
    animation-delay: 2s;
  }
  &:nth-child(3) span {
    animation-delay: 3s;
  }
`;

const text_reveal_box = keyframes`
  50% {
    width: 100%;
    left: 0;
  }

  100% {
    width: 0;
    left: 100%;
  }
`;

const BoxAnimation = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: ${(props) => props.theme.mainColor};
  animation: ${text_reveal_box} 1s ease;
  animation-delay: 0.5s;
`;
