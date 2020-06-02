import React from "react";
import styled from "styled-components";
import Header from "./Core/Header";

const Wrapper = styled.section``;
const Title = styled.h1``;
const Strong = styled.strong`
  font-weight: bold;
`;
const Subtitle = styled.p``;

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
