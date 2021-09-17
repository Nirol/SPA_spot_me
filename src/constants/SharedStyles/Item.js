import styled from "styled-components";
import { device } from "../device";
export const ItemTitle = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.mainTextBrightColor};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ItemParagraph = styled.p`
  color: ${(props) => props.theme.mainTextBrightColor};
  text-align: left;
`;

export const ItemSubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 10px;
  color: ${(props) => props.theme.mainTextBrightColor};
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
IconImage.defaultProps = {
  src: "",
};

export const Item = styled.div`
  flex-basis: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background-size: cover;
  margin: 10px 5%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0px 0px 18px 0px black;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: linear-gradient(60deg, #29323c 0%, #485563 100%);
    opacity: 0.5;
    z-index: -1;
  }

  @media ${device.tablet} {
    flex-basis: 37%;
    margin: 1.5%;
  }
`;
