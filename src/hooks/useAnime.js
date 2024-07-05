import { useState, useEffect } from "react";
import { getTopAnimeResponse } from "@/libs/api";

const useAnimeDetail = (mal_id) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!mal_id) return;

    const fetchDetail = async () => {
      const animeDetail = await getTopAnimeResponse(`anime/${mal_id}`);
      setData(animeDetail);
    };

    fetchDetail();
  }, [mal_id]);

  return data;
};

export default useAnimeDetail;
