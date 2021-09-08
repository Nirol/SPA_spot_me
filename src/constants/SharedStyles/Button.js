import styled from "styled-components";

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
  margin-top: 30px;
  transition: 0.3s ease background-color;
  transition-property: background-color, color;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.mainColor};
  }
`;
