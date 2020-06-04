import React from "react";
import styled from "styled-components";
import { Row, Col } from "@bootstrap-styled/v4";
import COLORS from "./Colors";
import ImgDesktopResponsiveDesign from "../Assets/Img/desktop-responsive-design.png";
import ImgMobileResponsiveDesign from "../Assets/Img/mobile-responsive-design.png";
import ImgTabletsResponsiveDesign from "../Assets/Img/tablets-responsive-design.png";

const Wrapper = styled.div``;
const Feature = styled.div`
  background-color: ${COLORS.white};
  overflow: hidden;
  @media (min-width: 768px) {
    padding-bottom: 7px;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: 1.77777777778em;
`;
const LinkTitle = styled.a`
  display: block;
  font-weight: 300;
  letter-spacing: -0.0625em;
  margin: 0;
  text-shadow: none;
  color: ${COLORS.white};
  background-image: url(${(props) => props.img});
  background-color: ${(props) => props.color};
  background-repeat: no-repeat;
  text-align: center;
  text-decoration: none;
  background-size: 40%;
  background-position: 20px center;
  padding: 30px 0 30px 50%;
  @media (min-width: 768px) {
    background-size: 80%;
    background-position: center 15px;
    padding: 122px 0 30px 0;
  }
  @media (min-width: 1200px) {
    background-size: auto;
    padding: 172px 0 30px 0;
  }
`;
const Description = styled.p`
  font-weight: 300;
  letter-spacing: -0.05555555556em;
  color: ${COLORS.siteGrey};
  margin: 0;
  padding: 7px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const Action = styled.button`
  color: ${COLORS.white};
  font-weight: 400;
  font-size: 1.1111111111em;
  background-color: ${(props) => props.color};
  border: none;
  padding: 2px 3.333333333333333%;
  float: right;
  margin-right: 7px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

function FeatureList() {
  return (
    <Wrapper>
      <Row>
        <Col xs="12" md="4">
          <Feature>
            <Title>
              <LinkTitle
                img={ImgDesktopResponsiveDesign}
                color={COLORS.siteRed}
                href="#"
              >
                Site Responsivo DESKTOP
              </LinkTitle>
            </Title>
            <Description>
              Quando pressionado o botão Leia mais... o restante da informação
              deverá aparecer em scroll down.
            </Description>
            <Action color={COLORS.siteRed}>Leia mais...</Action>
          </Feature>
        </Col>
        <Col xs="12" md="4">
          <Feature>
            <Title>
              <LinkTitle
                img={ImgDesktopResponsiveDesign}
                color={COLORS.siteRed}
                href="#"
              >
                Site Responsivo DESKTOP
              </LinkTitle>
            </Title>
            <Description>
              Quando pressionado o botão Leia mais... o restante da informação
              deverá aparecer em scroll down.
            </Description>
            <Action color={COLORS.siteRed}>Leia mais...</Action>
          </Feature>
        </Col>
        <Col xs="12" md="4">
          <Feature>
            <Title>
              <LinkTitle
                img={ImgDesktopResponsiveDesign}
                color={COLORS.siteRed}
                href="#"
              >
                Site Responsivo DESKTOP
              </LinkTitle>
            </Title>
            <Description>
              Quando pressionado o botão Leia mais... o restante da informação
              deverá aparecer em scroll down.
            </Description>
            <Action color={COLORS.siteRed}>Leia mais...</Action>
          </Feature>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default FeatureList;
