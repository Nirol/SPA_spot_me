import styled from "styled-components";

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

export const ItemSubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 10px;
  color: white;
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
