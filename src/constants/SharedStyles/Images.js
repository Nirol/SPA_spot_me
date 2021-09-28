import styled from "styled-components";
import { device } from "../device";
export const ProjectImageWrap = styled.div`
  width: 100%;
  min-height: 100px;
  max-width: 350px;
  max-height:400px
  cursor: pointer;
  @media ${device.tablet} {
    border: solid 1px black;
    max-width: 500px;
  }
  @media ${device.laptop} {
    border: solid 1px black;
    max-width: 600px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: pink;
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease transform;
  }
`;
