import React from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../constants/device";

interface BurgerProps {
  menuOpen: boolean;
  updateMenuOpen: (menuOpen: boolean) => void;
}
const Burger: React.FC<BurgerProps> = ({ menuOpen, updateMenuOpen }) => {
  const openMenu = (): void => {
    updateMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <BurgerDiv onClick={openMenu}>
        <BurgerBar BurgerState={menuOpen ? "0" : "8px"} />
      </BurgerDiv>
    </React.Fragment>
  );
};

const hamburger_pulses = keyframes`
0%{ opacity: 1;
    transform: scale(1);
}

  100% {
    opacity: 0;
    transform: scale(1.3);
  }
  `;
const BurgerDiv = styled.div`
  height: 60px;
  width: 60px;
  display: inline-block;
  border: solid 3px white;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  transform: scale(0.6);
  margin-right: 10px;

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid white;
    animation: ${hamburger_pulses} 1s ease infinite;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const BurgerBar = styled.div<{ BurgerState: string }>`
  height: 2px;
  width: 30px;
  position: relative;
  background-color: white;
  z-index: -1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: white;
    transition: 0.4s ease;
    transition-property: top, bottom;
  }

  &::after {
    top: ${({ BurgerState }) => BurgerState};
  }

  &::before {
    bottom: ${({ BurgerState }) => BurgerState};
  }
`;

export default Burger;
