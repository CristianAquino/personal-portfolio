import { useIntersectionObserver } from "@app/hooks";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListOfGifs } from "..";
import { useGifs } from "../../hooks";

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
    <>
      <h3>{keyword}</h3>
      {gifs.length == 0 ? <p>Loading...</p> : <ListOfGifs gifs={gifs} />}
      <div ref={elementRef}></div>
    </>
  );
};

export default SearchOfResults;
