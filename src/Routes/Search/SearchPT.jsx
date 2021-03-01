import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const SearchPT = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  loading,
  error,
  updateTerm,
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Conatainer>
          <div className="seacrh_bx">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="오늘 보고 싶은 것은?"
                value={searchTerm}
                onChange={updateTerm}
              />
            </form>
          </div>
          <Section
            title={movieResults !== null && movieResults.length > 0 && "영화"}
          >
            {movieResults &&
              movieResults.map((item, key) => {
                return (
                  <Poster
                    key={item.id}
                    id={item.id}
                    imgUrl={item.poster_path}
                    title={item.title}
                    rating={item.vote_average}
                    year={item.release_date.substring(0, 4)}
                    isMovie={true}
                  />
                );
              })}
          </Section>
          <Section title={tvResults !== null && tvResults.length > 0 && "Tv"}>
            {tvResults &&
              tvResults.map((item, key) => {
                return (
                  <Poster
                    key={item.id}
                    id={item.id}
                    imgUrl={item.poster_path}
                    title={item.name}
                    rating={item.vote_average}
                    year={item.first_air_date.substring(0, 4)}
                    isMovie={false}
                  />
                );
              })}
          </Section>
          {movieResults &&
            tvResults &&
            movieResults.length === 0 &&
            tvResults.length === 0 && (
              <Message
                text={`"${searchTerm}" 으로 검색된 결과가 없습니다.... 🤔`}
              ></Message>
            )}
        </Conatainer>
      )}
    </>
  );
};

const Conatainer = styled.div`
  .seacrh_bx {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
