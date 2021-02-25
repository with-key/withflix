import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import Section from "../../components/Section";

const Container = styled.div`
  padding: 0px 10px;
  .poster {
    width: 100%;
    border-radius: 8px;
  }
`;

const ItemLink = styled(Link)`
  transition: transform 200ms ease-in-out;
  :hover {
    transform: scale(1.1);
    z-index: 100;
  }
`;

const HomePT = ({ nowPlaying, upcoming, popular, loading, error }) => {
  return (
    <Container>
      <Section title="Now Playing">
        {loading ? (
          <div>Loading....</div>
        ) : (
          nowPlaying.map((item, key) => {
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
          })
        )}
      </Section>
      <Section title="Popular">
        {loading ? (
          <div>Loading....</div>
        ) : (
          popular.map((item, key) => <div key={key}>{item.title}</div>)
        )}
      </Section>
      <Section title="Upcoming">
        {loading ? (
          <div>Loading....</div>
        ) : (
          upcoming.map((item, key) => <div key={key}>{item.title}</div>)
        )}
      </Section>
    </Container>
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
