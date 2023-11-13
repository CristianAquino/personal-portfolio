import { useParams } from "react-router-dom";
import { useGifs } from "../../hooks";
import { ListOfGifs } from "..";

export type SearchOfResultsProps = {};

const SearchOfResults = ({}: SearchOfResultsProps) => {
  const { keyword } = useParams();
  const { gifs } = useGifs(keyword as string);

  if (gifs.length == 0) return <p>Loading...</p>;

  return <ListOfGifs gifs={gifs} />;
};

export default SearchOfResults;
