import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { ListOfGifs, SearchForm } from "..";
import { useGifs } from "../../hooks";

const TrendingSearches = lazy(
  () => import("../TrendingSearches/TrendingSearches")
);

export type HomeProps = {};

const Home = ({}: HomeProps) => {
  const { gifs } = useGifs();

  return (
    <div>
      <Helmet>
        <title>Home | Gifs</title>
        <meta
          name="description"
          content="main page of the gifs project created by CRdev where a list of gifs is displayedpage principal of gifs"
        />
      </Helmet>
      <h1>CRgifs</h1>
      <SearchForm />
      <Suspense fallback={<h1>Loading Trending Searches</h1>}>
        <TrendingSearches />
      </Suspense>
      <h3>Last Search</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
};

export default Home;
