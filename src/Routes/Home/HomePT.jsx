import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Poster from "../../components/Poster";

const Container = styled.div``;
const HomePT = ({ nowPlaying, upcoming, popular, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Section title="현재 상영중">
            {nowPlaying.map((item, key) => {
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
          <Section title="곧 상영할 영화">
            {upcoming.map((item, key) => {
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
          <Section title="인기 상영작">
            {popular.map((item, key) => {
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
        </Container>
      )}
    </>
  );
};

HomePT.PropsTypes = {
  nowPlaying: PropsTypes.array,
  upcoming: PropsTypes.array,
  popular: PropsTypes.array,
  loading: PropsTypes.bool.isRequired,
  error: PropsTypes.string,
};

export default HomePT;
