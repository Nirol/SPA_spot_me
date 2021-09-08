import styled from "styled-components";

export const Heading = styled.div`
  font-size: 4rem;
  font-weigh: 300;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  &:span {
    color: orange;
  }
`;
export const HeadingSpan = styled.span`
  color: ${(props) => props.theme.mainColor};
`;

export const ItemTitle = styled.div`
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ItemParagraph = styled.p`
  color: white;
  text-align: left;
`;
