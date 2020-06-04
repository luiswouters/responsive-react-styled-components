import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import COLORS from "./Colors";
import { Button, Modal, ModalBody, ModalFooter } from "@bootstrap-styled/v4";

const Wrapper = styled.div`
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
  background-image: url(./Assets/Img/${(props) => props.img});
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
const Content = styled.p`
  font-weight: 300;
  letter-spacing: -0.05555555556em;
  color: ${COLORS.siteGrey};
  margin: 0;
  padding: 7px;
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
  cursor: pointer;
  @media (min-width: 768px) {
    display: block;
  }
  &:hover {
    text-decoration: underline;
  }
`;

function Feature({
  title,
  description,
  color,
  image,
  type,
  content,
  blackFridayFunc,
}) {
  const [expand, setExpand] = useState(false);
  const [modal, setModal] = useState(false);
  const handleClose = (event) => {
    if (event) {
      event.preventDefault();
    }
    setModal(!modal);
  };
  const handleExpand = (event) => {
    if (event) {
      event.preventDefault();
    }
    setExpand(!expand);
  };
  return (
    <Wrapper>
      <Title>
        <LinkTitle
          img={image}
          color={color}
          href="#"
          onClick={(event) =>
            type === "expand"
              ? handleExpand(event)
              : type === "modal"
              ? handleClose(event)
              : blackFridayFunc(event)
          }
        >
          {title}
        </LinkTitle>
      </Title>
      <Description>{description}</Description>
      {type === "expand" && expand ? (
        <Content>
          <br />
          <br />
          {content}
        </Content>
      ) : (
        ""
      )}

      {type === "modal" ? (
        <Action color={color} onClick={(event) => handleClose(event)}>
          Leia mais...
        </Action>
      ) : type === "expand" ? (
        <Action color={color} onClick={(event) => handleExpand(event)}>
          Leia mais...
        </Action>
      ) : type === "theme" ? (
        <Action color={color} onClick={(event) => blackFridayFunc(event)}>
          Alterar tema
        </Action>
      ) : (
        ""
      )}
      <Modal isOpen={modal} toggle={() => handleClose()}>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={(event) => handleClose(event)}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </Wrapper>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  blackFridayFunc: PropTypes.func.isRequired,
};

export default Feature;
