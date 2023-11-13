import { useEffect, useState } from "react";
import { Gif } from "../models";
import { getGifs } from "../services";

function useGifs(keyword: any = null) {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    const keywordToUse = keyword ?? localStorage.getItem("lastKeyword");
    async function gifs() {
      const data = await getGifs(keywordToUse);
      localStorage.setItem("lastKeyword", keywordToUse);
      setGifs(data);
      return;
    }
    gifs();
  }, [keyword]);

  return { gifs };
}

export { useGifs };
