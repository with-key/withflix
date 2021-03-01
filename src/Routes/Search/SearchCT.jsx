import React, { useState } from "react";
import { moviesApi, tvApi } from "../../api";
import SearchPT from "./SearchPT";

const SearchCT = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 검색어가 ""가 아니면, function 을 실행함
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };

  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
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
      console.log("에러가 발생했습니다.");
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SearchPT
      loading={loading}
      error={error}
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default SearchCT;
