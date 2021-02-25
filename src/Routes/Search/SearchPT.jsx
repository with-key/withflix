import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";

const SearchPT = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  loading,
  error,
}) => {
  return <div>SearchPT</div>;
};

SearchPT.PropsTypes = {
  movieResults: PropsTypes.array,
  tvResults: PropsTypes.array,
  searchTerm: PropsTypes.string,
  handleSubmit: PropsTypes.func.isRequired,
  loading: PropsTypes.bool.isRequired,
  error: PropsTypes.string,
};

export default SearchPT;
