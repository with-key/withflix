import React, { useState } from "react";
import DetailPT from "./DetailPT";

const DetailCT = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return <DetailPT result={result} loading={loading} error={error} />;
};

export default DetailCT;
