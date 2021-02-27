import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import Section, { ItemLink } from "../../components/Section";
import Loader from "../../components/Loader";

const Container = styled.div``;

const HomePT = ({ nowPlaying, upcoming, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Section title="현재 상영중">
        {nowPlaying.map((item, key) => {
          return (
            <ItemLink key={key} className="item" to={`/movie/${item.id}`}>
              <div>
                <img
                  className="poster"
                  alt="poster"
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                />
              </div>
              {item.title}
            </ItemLink>
          );
        })}
      </Section>
      <Section title="상영 예정작">
        {upcoming.map((item, key) => {
          return (
            <ItemLink key={key} className="item" to={`/movie/${item.id}`}>
              <div>
                <img
                  className="poster"
                  alt="poster"
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                />
              </div>
              {item.title}
            </ItemLink>
          );
        })}
      </Section>
      <Section title="인기 상영작">
        {popular.map((item, key) => {
          return (
            <ItemLink key={key} className="item" to={`/movie/${item.id}`}>
              <div>
                <img
                  className="poster"
                  alt="poster"
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                />
              </div>
              {item.title}
            </ItemLink>
          );
        })}
      </Section>{" "}
    </Container>
  );

HomePT.PropsTypes = {
  nowPlaying: PropsTypes.array,
  upcoming: PropsTypes.array,
  popular: PropsTypes.array,
  loading: PropsTypes.bool.isRequired,
  error: PropsTypes.string,
};

export default HomePT;
