import { GifsLogo } from "@app/assets/gifsLogo";
import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { SearchForm } from "..";
import { useGifs } from "../../hooks";
import { LogoLink, MainGifs, SectionTitle } from "./style-components";

const TrendingSearches = lazy(
  () => import("../TrendingSearches/TrendingSearches")
);
const ListOfGifs = lazy(() => import("../ListOfGifs/ListOfGifs"));

export type HomeProps = {};

const Home = ({}: HomeProps) => {
  const { gifs } = useGifs();

  return (
    <MainGifs>
      {/* SEO */}
      <Helmet>
        <title>Home | Gifs</title>
        <meta
          name="description"
          content="main page of the gifs project created by CRdev where a list of gifs is displayedpage principal of gifs"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/gifIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/gifIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/gifIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/gifIcon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      {/* PAGE */}
      <LogoLink to={"/proyects/gifs"} aria-label="link to gifs">
        <GifsLogo />
      </LogoLink>
      <SearchForm />
      <SectionTitle>Trending</SectionTitle>
      <Suspense fallback={<h1>Loading Trending Searches</h1>}>
        <TrendingSearches />
      </Suspense>
      <SectionTitle>Last Search</SectionTitle>
      <Suspense fallback={<h1>Loading Last Searches</h1>}>
        <ListOfGifs gifs={gifs} />
      </Suspense>
    </MainGifs>
  );
};

export default Home;
