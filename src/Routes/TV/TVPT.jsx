import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";

const TVPT = ({ topRated, popular, airingToday, loading, error }) => {
  return (
    <div>
      {loading ? (
        <div>loading......</div>
      ) : (
        topRated.map((item, key) => <div key={key}>{item.name}</div>)
      )}
    </div>
  );
};

//type 지정
TVPT.PropsTypes = {
  topRated: PropsTypes.array,
  popular: PropsTypes.array,
  airingToday: PropsTypes.array,
  loading: PropsTypes.bool.isRequired,
  error: PropsTypes.string,
};

export default TVPT;
