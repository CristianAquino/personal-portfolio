import { useEffect, useState } from "react";
import { Gif } from "../models";
import { getGifs } from "../services";
import { persistLocalStorage } from "@app/helpers";

function useGifs(keyword: any = null) {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [page, setPage] = useState(0);
  const keywordToUse =
    keyword ?? JSON.parse(localStorage.getItem("lastKeyword")!).keyword;

  console.log(gifs);
  useEffect(() => {
    async function gifs() {
      const data = await getGifs({ keyword: keywordToUse });
      persistLocalStorage("lastKeyword", { keyword: keywordToUse });
      setGifs(data);
    }
    gifs();
  }, [keyword]);

  useEffect(() => {
    if (page == 0) return;
    console.log(page);
    async function gifs() {
      const data = await getGifs({ keyword: keywordToUse, page });
      setGifs((prev) => [...prev, ...data]);
    }
    gifs();
  }, [page]);

  return { gifs, setPage };
}

export { useGifs };
