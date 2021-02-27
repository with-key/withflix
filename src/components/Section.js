import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

//styled components

export const ItemLink = styled(Link)`
  transition: transform 200ms ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  padding: 0px 100px;
  margin: 40px 0;
  .poster {
    width: 100%;
    border-radius: 8px;
  }
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;
const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(15%, auto));
  /* grid-auto-rows: 50px; */
  font-size: 1.4rem;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

//Type
Section.PropsTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]),
};

export default Section;
