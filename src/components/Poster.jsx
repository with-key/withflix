import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.div`
  border-radius: 8px;
  padding: 10px;
  height: 330px;
  background: ${(prop) =>
    `url("https://www.themoviedb.org/t/p/w440_and_h660_face/${prop.imgUrl}")`};
  transition: all 400ms ease-in-out;
  background-size: cover;
  background-position: left;
`;

const Info = styled.div`
  transition: opacity 200ms linear;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  .info_title {
    font-size: 1.6rem;
  }
`;

const FlexBx = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  border-radius: 8px;
  position: relative;
  :hover {
    ${Image} {
      opacity: 0.3;
      background-position: right;
    }
    ${Info} {
      opacity: 1;
    }
  }
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <Image imgUrl={imgUrl} />
        <Info className="info">
          <div className="info_year">{year}</div>
          <FlexBx>
            <div className="info_title">
              {title.length > 10 ? `${title.substring(0, 10)}...` : title}
            </div>
            <div className="info_rating"> 🌟 {rating} / 10</div>
          </FlexBx>
        </Info>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
};

export default Poster;
