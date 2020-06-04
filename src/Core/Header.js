import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import LogoImg from "../Assets/Img/logo.png";
import COLORS from "./Colors";
import PropTypes from "prop-types";

const Wrapper = styled.header`
  display: block;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    text-align: left;
    border-bottom: 1px solid ${COLORS.siteLightGrey};
  }
`;
const LogoWrapper = styled.h1`
  margin: 0 auto;
  display: inline-block;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
const Logo = styled.a`
  font-size: 0;
  &:before {
    content: "";
    display: inline-block;
    width: 180px;
    height: 78px;
    background-image: url(${LogoImg});
  }
`;

function Header({ list }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo href="#gotohome">
          RaiaDrogasil S.A. - Gente, Saúde e Bem-estar.
        </Logo>
      </LogoWrapper>
      <Menu list={list} />
    </Wrapper>
  );
}

Header.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Header;
