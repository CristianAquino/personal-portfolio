import { useIntersectionObserver } from "@app/hooks";
import { Fragment, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListOfGifs, SearchForm } from "..";
import { useGifs } from "../../hooks";
import { Helmet } from "react-helmet";

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
    <Fragment>
      <Helmet>
        <title>Results of {keyword} | Gifs</title>
        <meta
          name="description"
          content={`results obtained when performing the ${keyword} search`}
        />
      </Helmet>
      <h1>CRgifs</h1>
      <SearchForm />
      <h3>{keyword}</h3>
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
    </Fragment>
  );
};

export default SearchOfResults;
