import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../assets/images/b2.jpeg";
import { device } from "../constants/device";
import { CTAButton } from "../constants/SharedStyles/Button";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTextWrapper>
        <HeroText>
          Solutions, <BoxAnimation />
        </HeroText>

        <HeroText>
          All Around!. <BoxAnimation />
        </HeroText>
        <HeroText>
          Nir Gilad
          <BoxAnimation />
        </HeroText>

        <CTAButton href="#projects" type="button">
          Portfolio
        </CTAButton>
      </HeroTextWrapper>
    </HeroContainer>
  );
};

const HeroTextWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding 0 50px;
justify-content: flex-start;
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${backgroundImage});
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
    background: ${(props) => props.theme.mainTextDarkColor};
    opacity: 0.2;
    z-index: -1;
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
  font-size: 2.5rem;
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

  @media ${device.tablet} {
    font-size: 6rem;
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
export default Hero;
