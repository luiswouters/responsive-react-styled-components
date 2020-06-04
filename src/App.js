import React from "react";
import styled from "styled-components";
import { Container } from "@bootstrap-styled/v4";
import Header from "./Core/Header";
import FeatureList from "./Core/FeatureList";
import Footer from "./Core/Footer";
import COLORS from "./Core/Colors";

const Title = styled.h2`
  font-size: 3.3333333333em;
  font-weight: 300;
  letter-spacing: -0.05em;
  line-height: 1em;
  color: ${COLORS.siteGreen};
  text-align: center;
`;
const Strong = styled.strong`
  font-weight: 800;
`;
const Subtitle = styled.h3`
  font-size: 1.7777777778em;
  font-weight: 300;
  letter-spacing: -0.0625em;
  line-height: 1.1875em;
  color: ${COLORS.siteGrey};
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Header />
      <Title>
        Crie este site <Strong>responsivo</Strong> com <Strong>REACT</Strong>{" "}
        utilizando <Strong>styled-components</Strong>
      </Title>
      <Subtitle>
        A fonte utilizada é a Open Sans de 300 a 800. exemplo: "Open Sans",
        Helvetica, sans-serif, arial; Já as cores são: #007f56, #868686,
        #FE9481, #FCDA92 e #9C8CB9
      </Subtitle>
      <FeatureList />
      <Footer />
    </Container>
  );
}

export default App;
