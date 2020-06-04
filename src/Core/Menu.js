import React from "react";
import styled from "styled-components";
import COLORS from "./Colors";
import PropTypes from "prop-types";

const Wrapper = styled.nav`
  display: block;
  margin-left: auto;
  align-self: center;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: block;
  border-bottom: 1px solid ${COLORS.siteLightGrey};
  @media (min-width: 768px) {
    display: inline-block;
    border-bottom: none;
  }
`;
const Link = styled.a`
  color: ${COLORS.white};
  text-transform: uppercase;
  font-size: 1.3888888889em;
  font-weight: 300;
  letter-spacing: -0.0909090909em;
  line-height: 1.18181818182em;
  text-decoration: none;
  margin-right: 20px;
  background-color: ${COLORS.sitePurple};
  display: block;
  padding: 3px 0;
  @media (min-width: 768px) {
    color: ${COLORS.siteGreen};
    background: none;
    padding: 0;
    font-size: 1.2222222222em;
  }
`;

function Menu({ list }) {
  return (
    <Wrapper>
      <List>
        {list.map((item) => {
          return (
            <ListItem>
              <Link href={item.link}>{item.name}</Link>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}

Menu.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Menu;
