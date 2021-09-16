import React from "react";
import styled from "styled-components";

import { Heading, HeadingSpan } from "../constants/SharedStyles/Heading";
import { ItemParagraph, ItemSubTitle } from "../constants/SharedStyles/Item";
import dataIcon from "../assets/icons/statistics.png";
import { device } from "../constants/device";

const ContactInfo: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          contact <HeadingSpan>info</HeadingSpan>
        </Heading>
        <ContactItems>
          <ContactItem>
            <ContactIcon>
              <ContactIconImage src={dataIcon} />
            </ContactIcon>
            <ItemSubTitle style={{ color: "black" }}>Phone</ItemSubTitle>
            <ContactDetails>+972-523960717</ContactDetails>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <ContactIconImage src={dataIcon} />
            </ContactIcon>
            <ItemSubTitle style={{ color: "black" }}>Phone</ItemSubTitle>
            <ContactDetails>+972-523960717</ContactDetails>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <ContactIconImage src={dataIcon} />
            </ContactIcon>
            <ItemSubTitle style={{ color: "black" }}>Phone</ItemSubTitle>
            <ContactDetails>+972-523960717</ContactDetails>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <ContactIconImage src={dataIcon} />
            </ContactIcon>
            <ItemSubTitle style={{ color: "black" }}>Phone</ItemSubTitle>
            <ContactDetails>+972-523960717</ContactDetails>
          </ContactItem>
        </ContactItems>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  width: 90%;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 50px 0;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
  }
`;

const ContactItems = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media ${device.tablet} {
    flex-basis: 37%;
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-top: 50px;
    padding-left: 20px;
  }
`;

const ContactItem = styled.div`
  width: 80%;
  padding-top: 10px;
  padding-bottom: 30px;
  border-radius: 10px;
  margin: 30px;
  display: flex;

  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 18px 0px #0000002c;
  flex-direction: column;
  text-align: center;
  &:hover {
    box-shadow: 0px 0px 55px 0px #0000002c;
    transition: 0.3s ease box-shadow;
  }
  @media ${device.tablet} {
    margin: 20px;
    flex-basis: 37%;
  }
`;

const ContactIcon = styled.div`
  margin: 0 auto;
`;

const ContactIconImage = styled.img`
  width: 50px;
  margin: 0 auto;
`;

const ContactDetails = styled(ItemParagraph)`
  color: black;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.2rem;
`;
export default ContactInfo;
