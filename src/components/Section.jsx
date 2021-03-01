import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";

//styled components

const Container = styled.div`
  padding: 0px 100px;
  margin: 40px 0;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(190px, auto));
  font-size: 1.2rem;
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
