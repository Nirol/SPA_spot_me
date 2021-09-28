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
import CGMLST from "../assets/images/project_images/ml/cgmlst_th.png";
import HOUSING_MARKET from "../assets/images/project_images/ml/california_housing.jpeg";
import ELECTIONS from "../assets/images/project_images/ml/elections.png";
import NRGENE from "../assets/images/project_images/ml/NRGene.png";
// machine learning implementations repo imports:
import {
  SOFT_SVM_REPO,
  KNN_REPO,
  G_RBF_SOFT_SVM_REPO,
  POLY_KERNEL_RIG_REGRESSION_REPO,
} from "../constants/repoLinks";

// other repo imports:
import {
  CGMLST_REPO,
  HOUSING_MARKET_REPO,
  ELECTIONS_REPO,
  NRGENE_REPO,
} from "../constants/repoLinks";
const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          Recent <HeadingSpan>Projects</HeadingSpan>
        </Heading>
        <ItemParagraph
          style={{
            fontSize: "18px",
            textAlign: "center",
            lineHeight: "1.5rem",
          }}
        >
          <span style={{ fontWeight: 700, textDecoration: "underline" }}>
            {" "}
            September 21 Update:
          </span>{" "}
          I am in the process of adding more of my existing projects <br />
          (mainly BE & FE) to to my webpage, also new exciting projects /
          collaborations are underway! stay tuned :)
        </ItemParagraph>
        <ItemTitle style={{ marginTop: "50px" }}>
          {" "}
          Data Analysis & Machine Learning Projects
        </ItemTitle>
        <ProjectsContainer>
          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>California Housing Market Prices Analysis </ItemTitle>

              <ItemParagraph>
                Exceptional In-Depth Data Analysis and Machine Learning Project
              </ItemParagraph>
              <ItemParagraph>
                A vast data science project from data acquisition, exploration,
                and cleaning, to Model picking, feature removal, and scaling.
                <br />
                Methods used: <br />
                1.Inferential Statistics 2.Data Visualization <br />
                3. Data cleaning Pipelines 4.Different ML Predictors <br />
                5. GridSearch & RandomizeSearch Fine Tuning
                <br /> <br />
                Achieved a significant improvement over the hands-on machine
                learning book chapter on this data-set and over the majority of
                Kaggle kernels. More details in the{" "}
                <ProjectLink onClick={() => openInNewTab(HOUSING_MARKET_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap>
              <ProjectImage src={HOUSING_MARKET} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Completing Missing Core Genes Alleles </ItemTitle>

              <ItemParagraph>
                This project target is to find a machine learning model that
                predicts the missing alleles of a single core gene based on all
                other core genes data in the bacteria CGMLST scheme.
              </ItemParagraph>
              <ItemParagraph>
                Including Data Gathering & Filtering, Data Cleaning, and
                multiple models being texted, including cross validation.
                <br />
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

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>
                The 22 Knesset Election Results Data Exploration{" "}
              </ItemTitle>

              <ItemParagraph>
                Analyzing the 22 knesset elections public results.
              </ItemParagraph>
              <ItemParagraph>
                This project Data Cleaning process turns out to be quite
                difficult because of the hebrew texts involved.
                <br />
                Methods Used:
                <br />
                1. Data Cleaning:
                <br />
                2.Inferential Statistics
                <br />
                3.Data Visualization
                <br />
                <br />
                More details in the{" "}
                <ProjectLink onClick={() => openInNewTab(ELECTIONS_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap onClick={() => openInNewTab(ELECTIONS)}>
              <ProjectImage src={ELECTIONS} />
            </ProjectImageWrap>
          </ProjectItem>

          <ProjectItem>
            <ProjectInfo>
              <ItemTitle>Genes data science project </ItemTitle>

              <ItemParagraph>
                In-Depth solution to NRgene gene data exploration assignment
              </ItemParagraph>
              <ItemParagraph>
                In this work I showcased python clean & high quality code.
                <br />
                I have also took advantage of pandas, NumPy, and Matplotlib
                libraries advanced capabilities.
                <br />
                Lastly, The project include detailed read me files for each part
                the work with high attention to details and to the assignment
                requests.
                <br />
                <br />
                More details in the{" "}
                <ProjectLink onClick={() => openInNewTab(NRGENE_REPO)}>
                  Repository{" "}
                </ProjectLink>
              </ItemParagraph>
            </ProjectInfo>
            <ProjectImageWrap onClick={() => openInNewTab(NRGENE)}>
              <ProjectImage src={NRGENE} />
            </ProjectImageWrap>
          </ProjectItem>
        </ProjectsContainer>
        <ItemTitle style={{ marginTop: "50px" }}>
          {" "}
          Machine Learning Algorithms implementations{" "}
        </ItemTitle>
        <ProjectsContainer>
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
            <ProjectImageWrap>
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
        </ProjectsContainer>

        <ItemTitle style={{ marginTop: "50px" }}>
          {" "}
          Full Stack Projects{" "}
        </ItemTitle>
        {/* <ProjectsContainer>
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
            <ProjectImageWrap>
              <ProjectImage src={softSVM} />
            </ProjectImageWrap>
          </ProjectItem>
        </ProjectsContainer> */}
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

const ProjectsContainer = styled.div`
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
    max-height: 650px;
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
