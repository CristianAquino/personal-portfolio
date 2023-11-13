import { gifData } from "../adapters";
const { VITE_API_KEY_GIFS } = import.meta.env;

async function getGifs(keyword: string = "panda") {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY_GIFS}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
  const url = await fetch(URL);
  const { data } = await url.json();
  return data.map((gif: any) => gifData(gif));
}

export { getGifs };
