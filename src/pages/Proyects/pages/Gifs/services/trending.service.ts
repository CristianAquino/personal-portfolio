const { VITE_API_KEY_GIFS } = import.meta.env;

async function getTrending() {
  const URL = `https://api.giphy.com/v1/trending/searches?api_key=${VITE_API_KEY_GIFS}`;
  const url = await fetch(URL);
  const { data } = await url.json();
  return data;
}

export { getTrending };
