import React from "react";
import styled from "styled-components";
import LogoImg from "../Assets/Img/logo_small.png";
import BrandDrogaRaia from "../Assets/Img/logo_drogaraia.png";

const Wrapper = styled.footer`
  display: flex;
  padding: 20px 0 10px 0;
`;
const Copyright = styled.p`
  font-weight: 300;
  font-size: 80%;
  letter-spacing: -0.05555555556em;
  align-self: center;
  margin: 0 70px 0 0;
`;
const BrandList = styled.ul`
  align-self: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const BrandListItem = styled.li``;
const Brand = styled.a`
  font-size: 0;
  &:after {
    content: "";
    display: inline-block;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-image: url(${(props) => props.img});
  }
`;
const Blog = styled.a`
  align-self: center;
  margin-left: auto;
  font-size: 0;
  &:after {
    content: "";
    display: block;
    width: 45px;
    height: 39px;
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Copyright>RD 2017. Todos os direitos reservados</Copyright>
      <BrandList>
        <BrandListItem>
          <Brand href="#" img={BrandDrogaRaia} width="80px" height="40px">
            Droga Raia
          </Brand>
        </BrandListItem>
      </BrandList>
      <Blog href="http://www.carloshps.com.br/blog">Blog</Blog>
    </Wrapper>
  );
}

export default Footer;
