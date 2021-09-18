import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/images/item_backgrounds/crimson-grey.png";
import thesisAlgo from "../assets/thesis/Thesis_algo.png";

import {
  Heading,
  HeadingSpan,
  HeadingParagraph,
} from "../constants/SharedStyles/Heading";
import { ItemParagraph, Item } from "../constants/SharedStyles/Item";
import { device } from "../constants/device";
import {
  ProjectImageWrap,
  ProjectImage,
} from "../constants/SharedStyles/Images";

const Thesis: React.FC = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <React.Fragment>
      <Container>
        <Top>
          <Heading>
            The<HeadingSpan>s</HeadingSpan>is
          </Heading>
          <HeadingParagraph>
            Gene Tree Reconciliation Algorithm Suited For Tandem Paralogs
          </HeadingParagraph>
        </Top>
        <ThesisImageWrap
          onClick={() =>
            openInNewTab(
              "https://nirol.github.io/assets/images/thesis/algorithm_workflow.PNG"
            )
          }
        >
          <ProjectImage src={thesisAlgo} />
        </ThesisImageWrap>
        <Bottom>
          <ItemWithBackground
            onClick={() =>
              openInNewTab(
                "https://nirol.github.io/assets/other/Thesis_SlideShow.ppsx"
              )
            }
          >
            <ThesisParagraph>
              Tree Reconciliation Intro & Thesis Slide Show
            </ThesisParagraph>
          </ItemWithBackground>
          <ItemWithBackground
            onClick={() =>
              openInNewTab(
                "https://nirol.github.io/assets/pdf/Thesis_Nir_Gilad_1.0.pdf"
              )
            }
          >
            <ThesisParagraph>Thesis PDF File</ThesisParagraph>
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
`;

const ThesisParagraph = styled(ItemParagraph)`
  text-align: center;
  text-decoration: underline;
  letter-spacing: 2px;
  cursor: pointer;
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
  margin-top: 20px;
  flex-direction: row;
  @media ${device.tablet} {
    width: 100%;
    margin: 1.5%;
    margin-top: 20px;
  }
`;

const ItemWithBackground = styled(Item)`
  background-image: url(${backgroundImage});
  display: flex;
  align-items: center;

  flex-direction: row;
  max-width: 200px;
  max-height: 50px;
  cursor: pointer;
`;

const ThesisImageWrap = styled(ProjectImageWrap)`
  cursor: pointer;
`;
export default Thesis;
