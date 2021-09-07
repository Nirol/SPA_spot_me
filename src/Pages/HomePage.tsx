import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Hero from "../components/Hero";
import { mainTheme } from "../constants/cssThemes";
import { device } from "../constants/device";

export default function HomePage() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        {/* <Header>
          <Title>
            <h1>Option 1 for styled homepage</h1>
          </Title>
        </Header> */}
        <Hero />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-family: ${(props) => props.theme.font};
`;

const Header = styled.div`
  background: tomato;
height 120px;
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  background: pink;
`;
