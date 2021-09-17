import styled from "styled-components";
import { device } from "../device";

export const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 30px;

  text-decoration: none;
  color: ${(props) => props.theme.mainColor};
  border: 2px solid ${(props) => props.theme.mainColor};
  background-color: transparent;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin: 30px 0px;
  transition: 0.3s ease background-color;
  transition-property: background-color, color;
  &:hover {
    color: ${(props) => props.theme.mainTextDarkColor};
    background-color: ${(props) => props.theme.mainColor};
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
    padding: 20px 60px;
  }
`;
