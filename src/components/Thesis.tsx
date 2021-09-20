import React from "react";
import styled from "styled-components";
import thesisAlgo from "../assets/thesis/Thesis_algo.png";
import {
  THESIS_SLIDES,
  THESIS_PDF,
  THESIS_ALGO,
} from "../assets/download_files_links";
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
import { openInNewTab } from "./OpenInNewTab";

const Thesis: React.FC = () => {
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
        <ThesisImageWrap onClick={() => openInNewTab(THESIS_ALGO)}>
          <ProjectImage src={thesisAlgo} />
        </ThesisImageWrap>
        <Bottom>
          <ItemWithBackground>
            <a download href={THESIS_SLIDES}>
              <ThesisParagraph>
                Tree Reconciliation Intro & Thesis Slide Show
              </ThesisParagraph>
            </a>
          </ItemWithBackground>
          <ItemWithBackground onClick={() => openInNewTab(THESIS_PDF)}>
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
  background: rgb(41, 50, 60);
  background: linear-gradient(
    302deg,
    rgba(41, 50, 60, 1) 0%,
    rgba(177, 5, 40, 1) 77%
  );
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
