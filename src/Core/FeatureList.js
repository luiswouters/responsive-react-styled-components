import React from "react";
import styled from "styled-components";
import { Row, Col } from "@bootstrap-styled/v4";
import Feature from "./Feature";
import PropTypes from "prop-types";

const Wrapper = styled.div``;

function FeatureList({ list, blackFridayFunc }) {
  return (
    <Wrapper>
      <Row>
        {list.map((item) => {
          return (
            <Col xs="12" md="4" key={item.id}>
              <Feature
                title={item.title}
                description={item.description}
                type={item.type}
                content={item.content}
                color={item.color}
                image={item.image}
                blackFridayFunc={blackFridayFunc}
              />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}

FeatureList.propTypes = {
  list: PropTypes.array.isRequired,
  blackFridayFunc: PropTypes.func.isRequired,
};

export default FeatureList;
