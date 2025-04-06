const BASE_URL = "/api/portfolio/";

async function userPortfolio() {
  const url = await fetch(BASE_URL + "user.json");
  const data = await url.json();
  return data;
}
export { userPortfolio };
