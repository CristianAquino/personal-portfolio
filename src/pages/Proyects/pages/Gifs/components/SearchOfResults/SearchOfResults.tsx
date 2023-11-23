import { GifsLogo } from "@app/assets/gifsLogo";
import { useIntersectionObserver } from "@app/hooks";
import { useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { ListOfGifs, SearchForm } from "..";
import { useGifs } from "../../hooks";
import { LogoLink, MainGifs, SectionTitle } from "../Home/style-components";

export type SearchOfResultsProps = {};

const SearchOfResults = ({}: SearchOfResultsProps) => {
  const { keyword } = useParams();
  const { gifs, setPage } = useGifs(keyword as string);
  const { isIntersecting, elementRef } = useIntersectionObserver({});

  const handleNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  useEffect(() => {
    if (isIntersecting) handleNextPage();
  }, [isIntersecting]);

  return (
    <MainGifs>
      <Helmet>
        <title>Results of {keyword} | Gifs</title>
        <meta
          name="description"
          content={`results obtained when performing the ${keyword} search`}
        />
      </Helmet>
      <LogoLink to={"/proyects/gifs"} aria-label="link to gifs">
        <GifsLogo />
      </LogoLink>
      <SearchForm />
      <SectionTitle>{keyword}</SectionTitle>
      {gifs.length == 0 ? (
        <p>
          <Helmet>
            <title>loading... | Gifs</title>
          </Helmet>
          Loading...
        </p>
      ) : (
        <ListOfGifs gifs={gifs} />
      )}
      <div ref={elementRef}></div>
    </MainGifs>
  );
};

export default SearchOfResults;
