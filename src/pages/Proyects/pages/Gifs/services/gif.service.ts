import { gifData } from "../adapters";
const { VITE_API_KEY_GIFS } = import.meta.env;

type getGifProps = {
  keyword: string;
  limit: number;
  page: number;
};

async function getGifs({
  keyword = "panda",
  limit = 10,
  page = 0,
}: Partial<getGifProps>) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY_GIFS}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=G&lang=en`;
  const url = await fetch(URL);
  const { data } = await url.json();
  return data.map((gif: any) => gifData(gif));
}

export { getGifs };
