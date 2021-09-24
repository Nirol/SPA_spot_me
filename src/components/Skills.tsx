import React from "react";
import styled from "styled-components";
import { Heading, HeadingSpan } from "../constants/SharedStyles/Heading";
import { ItemSubTitle, ItemTitle } from "../constants/SharedStyles/Item";
import { device } from "../constants/device";
const Skills: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          Pro<HeadingSpan>g</HeadingSpan>rams & <HeadingSpan>Sk</HeadingSpan>
          ills
        </Heading>
        <AllProjects>
          <ItemTitle> Fluent </ItemTitle>

          <ProjectItems>
            <ProjectItem>
              <ProjectInfo>
                <TagTitle>Backend</TagTitle>
                <TagsRow>
                  <ItemTag>Python</ItemTag>
                  <ItemTag>Flask</ItemTag>
                  <ItemTag>SQL</ItemTag>
                  <ItemTag>OOP</ItemTag>
                </TagsRow>
                <TagsRow>
                  <ItemTag>Rest API</ItemTag>
                  <ItemTag>Data Structures</ItemTag>
                </TagsRow>
              </ProjectInfo>
            </ProjectItem>
            <ProjectItem>
              <ProjectInfo>
                <TagTitle>Data</TagTitle>
                <TagsRow>
                  <ItemTag>Data Science</ItemTag>
                  <ItemTag>Machine Learning</ItemTag>
                  <ItemTag>Visualization</ItemTag>
                </TagsRow>
              </ProjectInfo>
            </ProjectItem>
          </ProjectItems>
          <ItemTitle> Solid </ItemTitle>
          <ProjectItems>
            <ProjectItem>
              <ProjectInfo>
                <TagTitle>Frontend</TagTitle>
                <TagsRow>
                  <ItemTag>React</ItemTag>
                  <ItemTag>Typescript</ItemTag>

                  <ItemTag>CSS</ItemTag>
                </TagsRow>
                <TagsRow>
                  <ItemTag>Javascript</ItemTag>
                  <ItemTag>HTML</ItemTag>
                </TagsRow>
              </ProjectInfo>
            </ProjectItem>

            <ProjectItem>
              <ProjectInfo>
                <TagTitle>Environment</TagTitle>
                <TagsRow>
                  <ItemTag>Docker</ItemTag>
                  <ItemTag>AWS</ItemTag>
                  <ItemTag>git</ItemTag>
                  <ItemTag>GitLab</ItemTag>
                </TagsRow>
              </ProjectInfo>
            </ProjectItem>

            <ProjectItem>
              <ProjectInfo>
                <TagTitle>Other</TagTitle>
                <TagsRow>
                  <ItemTag>Linux</ItemTag>

                  <ItemTag>Java </ItemTag>
                  <ItemTag>Java Concurrency</ItemTag>
                </TagsRow>
                <TagsRow>
                  <ItemTag>Algorithms </ItemTag>
                </TagsRow>
              </ProjectInfo>
            </ProjectItem>
          </ProjectItems>
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
  flex-direction: column;
`;

const ProjectItem = styled.div`
  display: flex;
  box-shadow: 0px 0px 18px 0px black;
  align-items: center;
  flex-direction: column;
  width: 82%;
  margin: 20px auto;

  background: linear-gradient(315deg, #000000 0%, #485563 20%);
  box-shadow: 5px 5px 5px 5px black;

  border-radius: 10%;

  @media ${device.tablet} {
    flex-basis: 40%;
    height: 100%;
    min-height: 150px;
    max-width: 300px;
    width: 90%;
  }
`;
const ProjectInfo = styled.div`
  padding: 0px 15px 15px 30px;
  display: flex;
  flex-direction: column;
`;

const TagTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  text-decoration: underline;
  color: white;
  font-weight: normal;
`;

const TagsRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const ItemTag = styled.div`
  flex-direction: row;
  height: 100%;
  color: white;
  background: crimson;
  background: linear-gradient(
    302deg,
    rgba(41, 50, 60, 0.8) 0%,
    rgba(177, 5, 40, 0.7) 22%
  );
  border-radius: 20px;
  margin: 5px 3px;
  padding: 5px;
  border: solid 0.5px black;
`;

const ProjectItems = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export default Skills;
