import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { ListOfGifs, SearchForm } from "..";
import { useGifs } from "../../hooks";
const TrendingSearches = lazy(
  () => import("../TrendingSearches/TrendingSearches")
);

export type HomeProps = {};

const Home = ({}: HomeProps) => {
  const { gifs } = useGifs();
  const navigate = useNavigate();

  function handleSubmit({ keyword }: { keyword: string }) {
    navigate(`/proyects/gifs/${keyword}`);
  }

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <Suspense fallback={<h1>Loading Trending Searches</h1>}>
        <TrendingSearches />
      </Suspense>
      <h3>Last Search</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
};

export default Home;
