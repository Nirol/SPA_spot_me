import styled from "styled-components";

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
