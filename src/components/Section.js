import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";

//styled components
const Container = styled.div`
  margin: 40px 0;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const Grid = styled.div`
  display: grid;
  gap: 5px;
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
