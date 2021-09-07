import React from "react";
import styled, { keyframes } from "styled-components";
import serviceImg from "../assets/images/service-item-image.jpg";
import dataIcon from "../assets/icons/statistics.png";
export default function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          Serv<HeadingSpan>i</HeadingSpan>ces
        </Heading>
        <HeadingParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </HeadingParagraph>

        {
          <Bottom>
            {/* <Item>
              <Icon image={icon1Image} />
            </Item> */}
            <Item>
              <Icon>
                <IconImage src={dataIcon} />
              </Icon>
              <ItemTitle>Web Design</ItemTitle>
              <ItemParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </ItemParagraph>
            </Item>
          </Bottom>
        }
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 100px 0;
`;

const Heading = styled.div`
  font-size: 4rem;
  font-weigh: 300;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  &:span {
    color: orange;
  }
`;
const HeadingSpan = styled.span`
  color: ${(props) => props.theme.mainColor};
`;

const HeadingParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  margin-top: 5px;
  line-height: 2.5rem;
  letter-spacing: 0.05re;
  color: grey;
`;

const Bottom = styled.div`
  flex-wrap: wrap;
  margin-top:50px;
`;
const Item = styled.div`
  flex-basis: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background-image: url(${serviceImg});
  background-size: cover;
  margin: 10px 5%;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: orange;
    opacity: 0.5;
    z-index: -1;
  }
`;
const ItemTitle = styled.div`
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ItemParagraph = styled.p`
  color: white;
  text-align: left;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

IconImage.defaultProps = {
  src: "",
};
