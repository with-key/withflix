import React from "react";

const HomePT = ({ nowPlaying, upcoming, popular, loading, error }) => {
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        nowPlaying.map((item, key) => <div key={key}>{item.title}</div>)
      )}
    </>
  );
};

export default HomePT;
