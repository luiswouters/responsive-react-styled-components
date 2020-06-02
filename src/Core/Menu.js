import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav``;
const List = styled.ul``;
const ListItem = styled.li``;
const Link = styled.a``;

function Menu() {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Link href="#gotolink">Nome do link!</Link>
        </ListItem>
        <ListItem>
          <Link href="#gotolink">Nome do link!</Link>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Menu;
