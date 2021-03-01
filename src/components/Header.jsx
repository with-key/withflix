import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

export default withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item currnet={pathname === "/"}>
          <SLink to="/">영화</SLink>
        </Item>
        <Item currnet={pathname === "/tv"}>
          <SLink to="/tv">Tv 프로그램</SLink>
        </Item>
        <Item currnet={pathname === "/search"}>
          <SLink to="/search">검색</SLink>
        </Item>
      </List>
    </Header>
  );
});

// styled
const Header = styled.header`
  z-index: 100;
  color: #fff;
  background-color: #141414;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  list-style: none;
  width: 100px;
  border-bottom: 5px solid ${(props) => (props.currnet ? "red" : "transparent")};
  font-weight: ${(props) => (props.currnet ? "700" : "400")};
  transition: border-bottom 0.5s ease-in;
`;
const SLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
