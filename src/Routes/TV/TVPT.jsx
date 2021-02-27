import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import Section, { ItemLink } from "../../components/Section";
import Loader from "../../components/Loader";

const Container = styled.div``;

const TVPT = ({ topRated, popular, airingToday, loading, error }) => {
  return (
    <Container>
      <Section title="탑 TV 프로그램">
        {loading ? (
          <Loader />
        ) : (
          topRated.map((item, key) => (
            <ItemLink key={key} to={`/tv/${item.id}`}>
              <div>
                <div>
                  <img
                    className="poster"
                    alt="poster"
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                  />
                </div>
                {item.name}
              </div>
            </ItemLink>
          ))
        )}
      </Section>
      <Section title="인기 상영 TV">
        {loading
          ? null
          : popular.map((item, key) => (
              <ItemLink key={key} to={`/tv/${item.id}`}>
                <div>
                  <div>
                    <img
                      className="poster"
                      alt="poster"
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                    />
                  </div>
                  {item.name}
                </div>
              </ItemLink>
            ))}
      </Section>
      <Section title="오늘 방송중">
        {loading
          ? null
          : airingToday.map((item, key) => (
              <ItemLink key={key} to={`/tv/${item.id}`}>
                <div>
                  <div>
                    <img
                      className="poster"
                      alt="poster"
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                    />
                  </div>
                  {item.name}
                </div>
              </ItemLink>
            ))}
      </Section>
    </Container>
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
