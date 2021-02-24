import React, { useEffect, useState } from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPT from "./SearchPT";

const SearchCT = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 검색어가 ""가 아니면, function 을 실행함
  const handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  const searchByTerm = async () => {
    try {
      setLoading(true);
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: showResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(showResults);
    } catch {
      setError("error!");
    } finally {
      setLoading(false);
    }
  };
  console.log(movieResults, tvResults, searchTerm, loading, error);
  return (
    <SearchPT
      loading={loading}
      error={error}
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchCT;
