import React from "react";
import styled from "styled-components";
import { device } from "../constants/device";
import { openInNewTab } from "./OpenInNewTab";
import { Heading, HeadingSpan } from "../constants/SharedStyles/Heading";
import { ItemParagraph, ItemTitle } from "../constants/SharedStyles/Item";
import {
  ProjectImageWrap,
  ProjectImage,
} from "../constants/SharedStyles/Images";

// machine learning implementations images imports:
import softSVM from "../assets/images/project_images/ml_implementation/softSVM.png";
import KNN from "../assets/images/project_images/ml_implementation/KNN_th.png";
import G_RBF_SOFT_SVM from "../assets/images/project_images/ml_implementation/Gaussian_Rbf_SoftSvm.png";

import POLY_KERNEL_RIG_REGRESSION from "../assets/images/project_images/ml_implementation/Poly_Kernel_Ridge_regression_th.png";

// other images imports:
import CGMLST from "../assets/images/project_images/ml_implementation/KNN_th.png";
// machine learning implementations repo imports:
import {
  SOFT_SVM_REPO,
  KNN_REPO,
  G_RBF_SOFT_SVM_REPO,
  POLY_KERNEL_RIG_REGRESSION_REPO,
} from "../constants/repoLinks";

// other repo imports:
import { CGMLST_REPO } from "../constants/repoLinks";
const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          Recent <HeadingSpan>Projects</HeadingSpan>
        </Heading>
        <ItemTitle> Machine Learning Algorithms implementations </ItemTitle>
        <AllProjects>
          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Soft SVM</ItemTitle>

              <ItemParagraph>
                Algorithm implementation as a quadratic programming
              </ItemParagraph>
              <ItemParagraph>
                The project includes testing the classifier performance on
                different lambda (the parameter λ of the soft SVM algorithm),
                <br />
                and Picturization of a low error classifier. values. More
                details in the{" "}
                <ProjectLink onClick={() => openInNewTab(SOFT_SVM_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap onClick={() => openInNewTab(softSVM)}>
              <ProjectImage src={softSVM} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>K-Nearest-Neighbors</ItemTitle>
              <ItemParagraph>
                Algorithm implementation in Matlab.
                <br />
                More details in the{" "}
                <ProjectLink onClick={() => openInNewTab(KNN_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap onClick={() => openInNewTab(KNN)}>
              <ProjectImage src={KNN} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Gaussian RBF Kernel Soft Svm</ItemTitle>
              <ItemParagraph>
                {" "}
                Algorithm implementation as a quadratic programming
              </ItemParagraph>
              <ItemParagraph>
                The algorithm takes two tweaking parameters: <br />
                1. lambda - the parameter λ of the soft SVM algorithm. <br />
                2. sigma - the bandwidth parameter σ of the RBF kernel <br />
                The project includes cross-validation of the parameters as well.
                More details in the{" "}
                <ProjectLink onClick={() => openInNewTab(G_RBF_SOFT_SVM_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap onClick={() => openInNewTab(G_RBF_SOFT_SVM)}>
              <ProjectImage src={G_RBF_SOFT_SVM} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Polynomial Kernel Ridge Regression</ItemTitle>
              <ItemParagraph>
                {" "}
                Algorithm implementation as a quadratic programming
              </ItemParagraph>
              <ItemParagraph>
                The algorithm takes two tweaking parameters: <br />
                1. lambda - the parameter λ of the kernel ridge regression
                algorithm. <br /> 2.n - the order n ∈ (0, 1, 2, {". . ."}) of
                the polynomial kernel. <br />
                The project includes cross-validation of the parameters as well.
                More details in the{" "}
                <ProjectLink
                  onClick={() => openInNewTab(POLY_KERNEL_RIG_REGRESSION_REPO)}
                >
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap
              onClick={() => openInNewTab(POLY_KERNEL_RIG_REGRESSION)}
            >
              <ProjectImage src={POLY_KERNEL_RIG_REGRESSION} />
            </ProjectImageWrap>
          </ProjectItem>
        </AllProjects>

        <ItemTitle> Data Science Analysis </ItemTitle>
        <AllProjects>
          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>K-Nearest-Neighbors</ItemTitle>

              <ItemParagraph>Algorithm implementation in Matlab.</ItemParagraph>
              <ItemParagraph>
                More details in the{" "}
                <ProjectLink onClick={() => openInNewTab(CGMLST_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap onClick={() => openInNewTab(CGMLST)}>
              <ProjectImage src={CGMLST} />
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

const ProjectLink = styled(ItemParagraph)`
  text-decoration: underline;
  cursor: pointer;
  display: inline;
`;

export default Projects;
