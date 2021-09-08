import React from "react";
import styled from "styled-components";
import serviceImg from "../assets/images/service-item-image.jpg";
import dataIcon from "../assets/icons/statistics.png";

import {
  Heading,
  HeadingSpan,
  HeadingParagraph,
} from "../constants/SharedStyles/Heading";
import {
  Icon,
  IconImage,
  ItemParagraph,
  ItemSubTitle,
  ItemTitle,
} from "../constants/SharedStyles/Item";

const Services: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          Serv<HeadingSpan>i</HeadingSpan>ces
        </Heading>
        <HeadingParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </HeadingParagraph>

        {
          <Bottom>
            <Item>
              <Icon>
                <IconImage src={dataIcon} />
              </Icon>
              <ItemTitle>Web Design</ItemTitle>
              <ItemSubTitle>ggg</ItemSubTitle>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </ItemParagraph>
            </Item>
          </Bottom>
        }
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 10px 0;
`;

const Bottom = styled.div`
  flex-wrap: wrap;
  margin-top: 50px;
`;
const Item = styled.div`
  flex-basis: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background-image: url(${serviceImg});
  background-size: cover;
  margin: 10px 5%;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(60deg, #29323c 0%, #485563 100%);
    opacity: 0.5;
    z-index: -1;
  }
`;

export default Services;
