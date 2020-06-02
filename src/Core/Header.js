import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Wrapper = styled.section``;
const Logo = styled.a``;

function Header() {
  return (
    <Wrapper>
      <Logo href="#gotohome">
        RaiaDrogasil S.A. - Gente, Saúde e Bem-estar.
      </Logo>
      <Menu />
    </Wrapper>
  );
}

export default Header;
