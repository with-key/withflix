import React, { useState, useEffect } from "react";
import HomePT from "./HomePT";
import { moviesApi } from "../../api";

const HomeCT = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fatchInfo = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();
        // throw Error();
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch {
        setError("error 발생");
      } finally {
        setLoading(false);
      }
    };
    fatchInfo();
  }, []);

  return (
    <HomePT
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};

export default HomeCT;
