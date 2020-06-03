import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul``;
const ListItem = styled.li``;
const Title = styled.h2``;
const Description = styled.p``;
const Action = styled.button``;

function FeatureList() {
  return (
    <Wrapper>
      <ListItem>
        <Title>Site Responsivo DESKTOP</Title>
        <Description>
          Quando pressionado o botão Leia mais... o restante da informação
          deverá aparecer em scroll down.
        </Description>
        <Action>Leia mais...</Action>
      </ListItem>
      <ListItem>
        <Title>Site Responsivo DESKTOP</Title>
        <Description>
          Quando pressionado o botão Leia mais... o restante da informação
          deverá aparecer em scroll down.
        </Description>
        <Action>Leia mais...</Action>
      </ListItem>
      <ListItem>
        <Title>Site Responsivo DESKTOP</Title>
        <Description>
          Quando pressionado o botão Leia mais... o restante da informação
          deverá aparecer em scroll down.
        </Description>
        <Action>Leia mais...</Action>
      </ListItem>
    </Wrapper>
  );
}

export default FeatureList;
