import React from "react";

const DetailPT = ({ result, loading, error, isMovie }) => {
  console.log(result);
  return (
    <>
      <div>{loading ? "loading..." : isMovie ? "Movie" : "Tv Show"}</div>
      <div>{loading ? "loading..." : isMovie ? result.title : result.name}</div>
    </>
  );
};

export default DetailPT;
