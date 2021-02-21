import React, { useState } from "react";
import SearchPT from "./SearchPT";

const SearchCT = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <SearchPT
      loading={loading}
      error={error}
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
    />
  );
};

export default SearchCT;
