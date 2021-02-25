import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";

const DetailPT = ({ result, loading, error, isMovie }) => {
  return (
    <>
      <div>{loading ? "loading..." : isMovie ? "Movie" : "Tv Show"}</div>
      <div>{loading ? "loading..." : isMovie ? result.title : result.name}</div>
    </>
  );
};

DetailPT.PropsTypes = {
  result: PropsTypes.array,
  loading: PropsTypes.bool,
  error: PropsTypes.bool.isRequired,
  isMovie: PropsTypes.bool,
};

export default DetailPT;
