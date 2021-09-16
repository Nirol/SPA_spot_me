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
import { device } from "../constants/device";

const Services: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Top>
          <Heading>
            Serv<HeadingSpan>i</HeadingSpan>ces
          </Heading>
          <HeadingParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </HeadingParagraph>
        </Top>
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
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  margin-top: 35px;
`;
const Top = styled.div`
  max-width: 500px;
  margin: 0 auto;
  @media ${device.tablet} {
    max-width: 800px;
    padding: 10px 15px;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

  @media ${device.tablet} {
    flex-basis: 37%;
    margin: 1.5%;
  }
`;
const Item = styled.div`
  flex-basis: 70%;
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
  overflow: hidden;

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

  @media ${device.tablet} {
    flex-basis: 37%;
    margin: 1.5%;
  }
`;

export default Services;
