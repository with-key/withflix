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
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  list-style: none;
  width: 60px;
`;
const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
