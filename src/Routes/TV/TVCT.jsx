import React, { useEffect, useState } from "react";
import TVPT from "./TVPT";
import { tvApi } from "../../api";

const TVCT = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fatchInfo = async () => {
      try {
        const {
          data: { results: popluar },
        } = await tvApi.popular();

        const {
          data: { results: airingToday },
        } = await tvApi.airingToday();

        const {
          data: { results: topRated },
        } = await tvApi.topRated();

        setPopular(popluar);
        setAiringToday(airingToday);
        setTopRated(topRated);
      } catch {
        setError("error!");
      } finally {
        setLoading(false);
      }
    };
    fatchInfo();
  }, []);

  return (
    <TVPT
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  );
};

export default TVCT;
