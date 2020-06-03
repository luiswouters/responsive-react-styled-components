import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer``;
const Copyright = styled.p``;
const BrandList = styled.ul``;
const BrandListItem = styled.li``;
const Brand = styled.a``;
const Blog = styled.a``;

function Footer() {
  return (
    <Wrapper>
      <Copyright>RD 2017. Todos os direitos reservados</Copyright>
      <BrandList>
        <BrandListItem>
          <Brand href="#">Droga Raia</Brand>
        </BrandListItem>
      </BrandList>
      <Blog href="http://www.carloshps.com.br/blog">Blog</Blog>
    </Wrapper>
  );
}

export default Footer;
