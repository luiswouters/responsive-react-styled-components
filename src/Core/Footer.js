import React from "react";
import styled from "styled-components";
import LogoImg from "../Assets/Img/logo_small.png";
import PropTypes from "prop-types";

const Wrapper = styled.footer`
  padding: 20px 0 10px 0;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    text-align: left;
  }
`;
const Copyright = styled.p`
  font-weight: 300;
  font-size: 80%;
  letter-spacing: -0.05555555556em;
  align-self: center;
  @media (min-width: 768px) {
    margin: 0 70px 0 0;
  }
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
    background-image: url(./Assets/Img/${(props) => props.img});
  }
`;
const Blog = styled.a`
  align-self: center;
  font-size: 0;
  &:after {
    content: "";
    display: block;
    width: 45px;
    height: 39px;
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
  }
  display: inline-block;
  @media (min-width: 768px) {
    margin-left: auto;
    display: block;
  }
`;

function Footer({ list }) {
  return (
    <Wrapper>
      <Copyright>RD 2017. Todos os direitos reservados</Copyright>
      <BrandList>
        <BrandListItem>
          {list.map((item) => {
            return (
              <Brand
                key={item.id}
                href={item.link}
                img={item.image}
                width="80px"
                height="40px"
              >
                {item.name}
              </Brand>
            );
          })}
        </BrandListItem>
      </BrandList>
      <Blog href="http://www.carloshps.com.br/blog">Blog</Blog>
    </Wrapper>
  );
}

Footer.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Footer;
