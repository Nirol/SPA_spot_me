import React from "react";
import styled from "styled-components";
import { device } from "../constants/device";

export default function HomePage() {
  return (
    <Container>
      <Header>
        <Title>
          <h1>Option 1 for styled homepage</h1>
        </Title>
      </Header>
      <MainWindow>
        orem ipsum dolor sit amet, consectetur adipis adsadasdasdorem ipsum
        dolor sit amet, consectetur adipis adsadasdasdorem ipsum dolor sit amet,
        consectetur adipis adsadasdasdorem ipsum dolor sit amet, consectetur
        adipis adsadasdasd
      </MainWindow>
      <Side1>side1</Side1>
      <Side2>side2</Side2>
      <Footer>footer</Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  & > * {
    padding: 10px;
    margin: 10px;
    flex: 1 100%;
    border-radius: 50px 20px;
  }
`;

const MainWindow = styled.div`
text-align: center;
background: deepskyblue;
height 300x;
font-size: 24px;
@media ${device.laptop} {
  background: purple;
flex:3;
order:2;
}
`;

const Side1 = styled.div`
  background: gold;
  @media ${device.laptop} {
    order: 1;
  }
  @media ${device.tablet} {
    flex: 1;
  }
`;
const Side2 = styled.div`
  background: hotpink;
  @media ${device.laptop} {
    order: 2;
  }
  @media ${device.tablet} {
    flex: 1;
  }
`;

const Header = styled.div`
  background: tomato;
height 120px;
`;
const Footer = styled.div`
  background: lightgreen;
height 80x;
@media  ${device.laptop} {
  order:4;
  }
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  background: pink;
`;
