import React from "react";

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

export default TVPT;
