import React from "react";

const TVPT = ({ topRated, popular, airingToday, loading, error }) => {
  console.log(topRated);
  return (
    <div>
      {loading ? (
        <div>loading......</div>
      ) : (
        topRated.map((item) => <div>{item.name}</div>)
      )}
    </div>
  );
};

export default TVPT;
