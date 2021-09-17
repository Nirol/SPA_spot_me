import React from "react";
import styled from "styled-components";
import { Heading, HeadingSpan } from "../constants/SharedStyles/Heading";
import {
  ItemParagraph,
  ItemSubTitle,
  ItemTitle,
  IconImage,
} from "../constants/SharedStyles/Item";
import serviceImg from "../assets/images/item_backgrounds/bb1.png";
import { device } from "../constants/device";
const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          Recent <HeadingSpan>Projects</HeadingSpan>
        </Heading>
        <AllProjects>
          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Project 1</ItemTitle>
              <ItemSubTitle>Coding is Love</ItemSubTitle>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap>
              <ProjectImage src={serviceImg} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Project 2</ItemTitle>
              <ItemSubTitle>dddd</ItemSubTitle>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap>
              <ProjectImage src={serviceImg} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Project 3</ItemTitle>
              <ItemSubTitle>ggg</ItemSubTitle>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap>
              <ProjectImage src={serviceImg} />
            </ProjectImageWrap>
          </ProjectItem>
        </AllProjects>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  margin-top: 50px;
`;

const AllProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
  background: rgb(0,36,29);
  background: linear-gradient(328deg, rgba(0,36,29,0.7847514005602241) 0%, rgba(1,71,57,0.8071603641456583) 47%, rgba(2,103,84,0.8015581232492998) 100%);
  box-shadow: 0px 0px 10px 0px black;
  @media ${device.tablet} {
    max-height: 250px;
    margin 0;
    width: 95%;
    border-radius: 0;
    flex-direction: row;
    width: 100%;
    border: solid 1px black;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
  @media ${device.laptop} {
    max-height: 300px;
    margin: 0 auto;      
  }
`;
const ProjectInfo = styled.div`
  padding: 30px;
  flex-basis: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ProjectImageWrap = styled.div`
  flex-basis: 50%;
  width: 100%;
  min-height: 300px;

  @media ${device.tablet} {
    border: solid 1px black;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  min-height: 300px;
  object-fit: cover;
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
ProjectImage.defaultProps = {
  src: "",
};

export default Projects;
