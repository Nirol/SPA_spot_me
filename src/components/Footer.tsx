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
        <SocialItems>
          <SocialLink href="http://www.ynet.co.il" target="_blank">
            <SocialIcon src="https://img.icons8.com/bubbles/100/000000/behance.png" />
          </SocialLink>
          <SocialLink href="http://www.gmail.com" target="_blank">
            <SocialIcon
              src={"https://img.icons8.com/bubbles/100/000000/new-post.png"}
            />
          </SocialLink>
          <SocialLink href="http://www.twitter.com" target="_blank">
            <SocialIcon
              src={"https://img.icons8.com/bubbles/100/000000/twitter.png"}
            />
          </SocialLink>
          <SocialLink href="http://www.facebook.com" target="_blank">
            <SocialIcon src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
          </SocialLink>
        </SocialItems>
        <FooterParagraph>
          Copyright © 2021 Nir Gilad. All rights reserved
        </FooterParagraph>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 500px;
  text-align: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  min-height: 50px;

  max-width: 1200px;

  padding-top: 10px;
  padding-bottom: 50px;

  margin: 0 auto;

  background: linear-gradient(60deg, #29323c 0%, #485563 100%);
`;

export const SocialItems = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin: 15px 12px;
  width: 50px;
  height: 50px;
`;

const SocialIcon = styled.img`
  width: 50px;
  height: 50px;

  filter: grayscale(0);
  transition: 0.3s ease filter;
  &:hover {
    filter: grayscale(0);
  }
`;

const FooterSubTitle = styled(ItemSubTitle)`
  margin-top: 5px;
`;

const FooterParagraph = styled(ItemParagraph)`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Footer;
