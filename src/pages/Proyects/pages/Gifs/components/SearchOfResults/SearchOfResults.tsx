import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks";
import { ListOfGifs } from "..";

export type SearchOfResultsProps = {};

const SearchOfResults = ({}: SearchOfResultsProps) => {
  const { keyword } = useParams();
  const { gifs, setPage } = useGifs(keyword as string);

  function handleNextPage() {
    setPage((prev) => prev + 1);
  }

  if (gifs.length == 0) return <p>Loading...</p>;
  return (
    <>
      <h3>{keyword}</h3>
      <ListOfGifs gifs={gifs} />
      <button onClick={handleNextPage}>Next page</button>
    </>
  );
};

export default SearchOfResults;
