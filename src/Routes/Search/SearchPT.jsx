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
  updateTerm,
}) => {
  console.log(movieResults);
  return (
    <Conatainer onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          placeholder="오늘 보고 싶은 것은?"
          value={searchTerm}
          onChange={updateTerm}
        />
      </form>
    </Conatainer>
  );
};

const Conatainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  input {
    width: 40rem;
    height: 4rem;
    border: 1px solid #fff;
    padding: 0 10px;
    border-radius: 20px;
    background-color: #141414;
    outline: none;
    color: #fff;
  }
`;

SearchPT.PropsTypes = {
  movieResults: PropsTypes.array,
  tvResults: PropsTypes.array,
  searchTerm: PropsTypes.string,
  handleSubmit: PropsTypes.func.isRequired,
  loading: PropsTypes.bool.isRequired,
  error: PropsTypes.string,
  updateTerm: PropsTypes.func.isRequired,
};

export default SearchPT;
