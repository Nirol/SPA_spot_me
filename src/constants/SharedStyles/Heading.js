import styled from "styled-components";
import { device } from "../device";
export const Heading = styled.div`
  font-size: 3rem;
  font-weigh: 300;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  &:span {
    color: orange;
  }

  @media ${device.tablet} {
    font-size: 6rem;
  }
`;
export const HeadingSpan = styled.span`
  color: ${(props) => props.theme.mainColor};
`;

export const HeadingParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  margin-top: 5px;
  line-height: 2.5rem;
  letter-spacing: 0.05re;
  color: grey;
`;
