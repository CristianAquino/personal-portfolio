import { SingleGif } from "..";
import { Gif } from "../../models";

export type ListOfGifsProps = {
  gifs: Gif[];
};

const ListOfGifs = ({ gifs }: ListOfGifsProps) => {
  return (
    <div>
      {gifs.map((gif) => (
        <SingleGif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default ListOfGifs;
