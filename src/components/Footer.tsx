import React from "react";
import styled from "styled-components";
import { HeadingSpan } from "../constants/SharedStyles/Heading";
import {
  ItemSubTitle,
  ItemTitle,
  ItemParagraph,
} from "../constants/SharedStyles/Item";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <ItemTitle>
          <HeadingSpan>N</HeadingSpan>ir Gil<HeadingSpan>a</HeadingSpan>d
        </ItemTitle>
        <FooterSubTitle>Solutions! All Around</FooterSubTitle>
        <FooterParagraph>
          Copyright © 2021 Nir Gilad. All rights reserved
        </FooterParagraph>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 200px;
  text-align: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  min-height: 20px;

  max-width: 1200px;

  margin: 0 auto;
  border: solid 1px black;
  box-shadow: 5px 5px 5px black;
  background: transparent;
`;

export const SocialItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin: 0px 5px;
  width: 50px;
  height: 50px;
`;

const FooterSubTitle = styled(ItemSubTitle)`
  margin-top: 0px;
`;

const FooterParagraph = styled(ItemParagraph)`
  justify-content: center;

  text-align: center;
`;

export default Footer;
