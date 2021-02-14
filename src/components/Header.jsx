import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Header>
      <List>
        <Item>
          <SLink to="/">Home</SLink>
        </Item>
        <Item>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item>
          <SLink to="/seLinkrch">Search</SLink>
        </Item>
      </List>
    </Header>
  );
};

// styled
const Header = styled.header`
  border: 1px solid red;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  list-style: none;
`;
const SLink = styled(Link)`
  text-decoration: none;
`;
