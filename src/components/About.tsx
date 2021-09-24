import React from "react";
import styled from "styled-components";

import {
  Heading,
  HeadingSpan,
  HeadingParagraph,
} from "../constants/SharedStyles/Heading";
import { ItemSubTitle } from "../constants/SharedStyles/Item";
import { RESUME_ML } from "../assets/download_files_links";
import { CTAButton } from "../constants/SharedStyles/Button";

import aboutImage from "../assets/images/profile-gray.png";
import { device } from "../constants/device";
import { openInNewTab } from "./OpenInNewTab";
const About: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <LeftContent>
          <ImageWrapper>
            <AboutImage src={aboutImage} />
          </ImageWrapper>
        </LeftContent>

        <RightContent>
          <Heading>
            Abo<HeadingSpan>u</HeadingSpan>t <HeadingSpan>me</HeadingSpan>
          </Heading>
          <AboutSubTitle>
            Full Stack Developer & Aspiring Machine Learning Engineer
          </AboutSubTitle>
          <HeadingParagraph>
            With both BSc & MSc, I have acquired strong fundamentals in Computer
            Science. I have carried out multiple Data Science & Machine Learning
            projects during my employment as Bio-informatician and my Master's
            courses. My entrance to the job market was as a full-stack web
            development developer but I am striving to dive into the realm of
            Machine Learning and Data Science professionally.
          </HeadingParagraph>

          <AboutCTAButton onClick={() => openInNewTab(RESUME_ML)} type="button">
            Download CV
          </AboutCTAButton>
        </RightContent>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  flex-direction: column-reverse;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0px;

  @media ${device.tablet} {
    flex-direction: row;
    min-height: 40vh;
    margin-top: 20px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding-left: 40px;
    width: 600px;
    height: 400px;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid black;
  border-radius: 50%;
  &::after {
    content: "";
    position: absolute;
    top: 22px;
    left: -25px;
    width: 98%;
    height: 98%;
    border-left: 7px solid ${(props) => props.theme.mainColor};
    border-bottom: 7px solid ${(props) => props.theme.mainColor};
    z-index: -1;
    box-shadow: -2px 2px;
  }
`;
const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  border-radius: 50%;
`;

AboutImage.defaultProps = {
  src: "",
};

const RightContent = styled.div`
  width: 100%;

  @media ${device.tablet} {
    text-align: left;
    padding: 0px 30px;
  }
`;

const AboutCTAButton = styled(CTAButton)`
  color: ${(props) => props.theme.mainTextDarkColor};
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 2rem;
`;

const AboutSubTitle = styled(ItemSubTitle)`
  color: ${(props) => props.theme.mainTextDarkColor};
`;

export default About;
