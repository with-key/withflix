import React, { useEffect, useState } from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPT from "./DetailPT";

const DetailCT = ({ props }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMovie, setMovie] = useState(null);

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = props;

    const numberedId = Number(id);
    if (isNaN(numberedId)) {
      return push("/");
    }
    const validMovie = pathname.includes("/movie");
    setMovie(validMovie);

    const detailInfo = async () => {
      try {
        if (validMovie) {
          const { data: isMovieResult } = await moviesApi.movieDetail(
            numberedId
          );
          setResult(isMovieResult);
        } else {
          const { data: isTvResult } = await tvApi.tvDetail(numberedId);
          setResult(isTvResult);
        }
      } catch {
        setError("Error!");
      } finally {
        setLoading(false);
      }
    };
    detailInfo();
  }, [props]);

  return (
    <DetailPT
      result={result}
      loading={loading}
      error={error}
      isMovie={isMovie}
    />
  );
};

export default DetailCT;
