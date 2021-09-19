import React from "react";
import styled from "styled-components";
import { Heading, HeadingSpan } from "../constants/SharedStyles/Heading";
import {
  ItemParagraph,
  ItemSubTitle,
  ItemTitle,
} from "../constants/SharedStyles/Item";
import {
  ProjectImageWrap,
  ProjectImage,
} from "../constants/SharedStyles/Images";
import serviceImg from "../assets/images/item_backgrounds/crimson-grey.png";
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
  background: white;

  background: linear-gradient(315deg, #000000 0%, #485563 20%);
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
  @media ${device.tablet} {
    flex-basis: 70%;
  }
`;

export default Projects;
