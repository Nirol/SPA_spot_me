import React from "react";
import styled from "styled-components";
import {
  Heading,
  HeadingSpan,
  ItemParagraph,
  ItemTitle,
} from "../constants/sharedStyles";
import serviceImg from "../assets/images/service-item-image.jpg";
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
            <ProjectImageWrap></ProjectImageWrap>
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
            <ProjectImageWrap></ProjectImageWrap>
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
            <ProjectImageWrap></ProjectImageWrap>
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
  height: 100%;
`;
const ProjectInfo = styled.div`
  padding: 30px;
  flex-basis: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(60deg, #29323c 0%, #485563 100%);
`;
const ItemSubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 10px;
  color: white;
`;

const ProjectImageWrap = styled.div`
  flex-basis: 50%;
  width: 100%;
  min-height: 300px;
  background-image: url(${serviceImg});
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: pink;
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease transform;
  }
`;

export default Projects;
