import React from "react";
import styled from "styled-components";
import serviceImg from "../assets/images/item_backgrounds/crimson-grey.png";
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
  Item,
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
          <ItemWithBackground>
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
          </ItemWithBackground>
          <ItemWithBackground>
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
          </ItemWithBackground>

          <ItemWithBackground>
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
          </ItemWithBackground>
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
const ItemWithBackground = styled(Item)`
  background-image: url(${serviceImg});
`;

export default Services;
