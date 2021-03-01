import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Poster from "../../components/Poster";

const Container = styled.div``;

const TVPT = ({ topRated, popular, airingToday, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Section title="탑 TV 프로그램">
            {topRated.map((item, key) => (
              <Poster
                key={item.id}
                id={item.id}
                imgUrl={item.poster_path}
                title={item.name}
                rating={item.vote_average}
                year={item.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
          <Section title="탑 TV 프로그램">
            {popular.map((item, key) => (
              <Poster
                key={item.id}
                id={item.id}
                imgUrl={item.poster_path}
                title={item.name}
                rating={item.vote_average}
                year={item.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
          <Section title="탑 TV 프로그램">
            {airingToday.map((item, key) => (
              <Poster
                key={item.id}
                id={item.id}
                imgUrl={item.poster_path}
                title={item.name}
                rating={item.vote_average}
                year={item.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        </Container>
      )}
    </>
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
