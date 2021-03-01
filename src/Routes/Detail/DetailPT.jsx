import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  border: 1px solid red;
  background: url();
`;

const DetailPT = ({ result, loading, error, isMovie }) => {
  return <Container>DetailPT</Container>;
};

DetailPT.PropsTypes = {
  result: PropsTypes.array,
  loading: PropsTypes.bool,
  error: PropsTypes.bool.isRequired,
  isMovie: PropsTypes.bool,
};

export default DetailPT;
