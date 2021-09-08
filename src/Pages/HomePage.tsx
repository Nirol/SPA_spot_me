import React from "react";
import styled, { ThemeProvider } from "styled-components";
import HeroPage from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
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
        <HeroPage />
        <Services />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: ${(props) => props.theme.font};
`;
